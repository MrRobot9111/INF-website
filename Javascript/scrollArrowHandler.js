const path = document.querySelector(".arrow-path path");
const pathBackWards = document.querySelector(".arrow-path-backwards path");

const links = ["index.html", "Teknikprogrammet.html", "Inriktning.html", "Kurser.html", "Larare.html"]; // The problem is the "ä"

const pathLength = path.getTotalLength();
const pathLengthBackwards = pathBackWards.getTotalLength();

// Function to get the current page index based on the URL
const getCurrentPageIndex = () => {
    const currentFileName = window.location.pathname.split("/").pop(); // Get the current file name
    const index = links.indexOf(currentFileName); // Find the index of the file name in the links array
    return index !== -1 ? index : 0; // Default to 0 if not found
};

// Initialize the stored index from the current page URL
let currentPageIndex = getCurrentPageIndex();
localStorage.setItem("currentPageIndex", currentPageIndex); // Store it for consistency

console.log("Initial Page Index (based on URL): " + currentPageIndex);

// Update page index for forward navigation
const updatePageIndex = (index) => {
    return new Promise((resolve) => {
        console.log("Updated Page Index: " + currentPageIndex);
        currentPageIndex = Math.min(currentPageIndex + 1, links.length - 1); // Ensure it doesn't go out of bounds
        localStorage.setItem("currentPageIndex", currentPageIndex); // Save the updated index
        console.log("Updated Page Index: " + currentPageIndex);
        resolve();
    });
};

// Update page index for backward navigation
const updatePageIndexBackwards = (index) => {
    return new Promise((resolve) => {
        currentPageIndex = Math.max(currentPageIndex - 1, 0); // Ensure it doesn't go below 0
        localStorage.setItem("currentPageIndex", currentPageIndex); // Save the updated index
        console.log("Updated Page Index: " + currentPageIndex);
        resolve();
    });
};

// Set up initial path styles (No inline styles for stroke)
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = 0; // This will be controlled by CSS

pathBackWards.style.strokeDasharray = pathLengthBackwards;
pathBackWards.style.strokeDashoffset = 0; // This will be controlled by CSS

path.classList.add("default"); // Add the 'default' class to start with fade effect
pathBackWards.classList.add("default");

let progress = 0; // Progress for forward scroll
let progressBackwards = 0; // Progress for backward scroll

let scrollLock = false; // Initialize the scroll lock

document.addEventListener("wheel", (event) => {
    if (scrollLock) return; // If the lock is active, ignore the event

    const scrim = document.getElementById("scrim");
    
    // Check if the scrim exists and is visible
    if (scrim && getComputedStyle(scrim).display !== "none") {
        return; // Do nothing if the scrim is visible
    }

    if (event.deltaY > 0) {
        // Reset backward progress
        progressBackwards = 0;
        pathBackWards.style.strokeDashoffset = pathLengthBackwards * (1 - progressBackwards);

        // Ensure this arrow is visible
        path.style.display = "block";

        // Hide the backward arrow temporarily
        pathBackWards.style.display = "none";

        // Scroll Down
        progress += event.deltaY * 0.0025;
        progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

        path.style.strokeDashoffset = pathLength * (1 - progress);

        if (progress === 0) {
            path.classList.remove("scrolling");
            path.classList.add("default");

            // Make the backward arrow visible again
            pathBackWards.style.display = "block";

            if (progressBackwards === 0) {
                resetArrows();
            }
        } else if (progress === 1) {
            scrollLock = true; // Activate the lock
            updatePageIndex(currentPageIndex).then(() => {
                setTimeout(() => {
                    window.location.href = `${window.location.origin}/${links[currentPageIndex]}`;
                }, 300);
            }).finally(() => {
                setTimeout(() => {
                    scrollLock = false; // Release the lock after .5 seconds
                }, 500); // Adjust this duration as needed
            });
        } else {
            path.classList.add("scrolling");
            path.classList.remove("default");
        }
    } else if (event.deltaY < 0) {
        // Reset forward progress
        progress = 0;
        path.style.strokeDashoffset = pathLength * (1 - progress);

        // Ensure this arrow is visible
        pathBackWards.style.display = "block";

        // Hide the forward arrow temporarily
        path.style.display = "none";

        // Scroll Up (handle back navigation)
        progressBackwards += Math.abs(event.deltaY) * 0.0025;
        progressBackwards = Math.max(0, Math.min(1, progressBackwards)); // Clamp between 0 and 1

        pathBackWards.style.strokeDashoffset = pathLengthBackwards * (1 - progressBackwards);

        if (progressBackwards === 0) {
            pathBackWards.classList.remove("scrolling");
            pathBackWards.classList.add("default");

            // Make the forward arrow visible again
            path.style.display = "block";

            if (progress === 0) {
                resetArrows();
            }
        } else if (progressBackwards === 1) {
            scrollLock = true; // Activate the lock
            updatePageIndexBackwards(currentPageIndex).then(() => {
                setTimeout(() => {
                    window.location.href = `${window.location.origin}/${links[currentPageIndex]}`;
                }, 300);
            }).finally(() => {
                setTimeout(() => {
                    scrollLock = false; // Release the lock after .5 seconds
                }, 500); // Adjust this duration as needed
            });
        } else {
            pathBackWards.classList.add("scrolling");
            pathBackWards.classList.remove("default");
        }
    }
});


// Helper function to reset both arrows
function resetArrows() {
    // Reset forward arrow
    path.style.strokeDashoffset = 0;
    path.classList.remove("scrolling");
    path.classList.add("default");
    path.style.display = "block";

    // Reset backward arrow
    pathBackWards.style.strokeDashoffset = 0;
    pathBackWards.classList.remove("scrolling");
    pathBackWards.classList.add("default");
    pathBackWards.style.display = "block";
}
