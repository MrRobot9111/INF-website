const path = document.querySelector(".arrow-path path");
const pathBackWards = document.querySelector(".arrow-path-backwards path");

const links = ["index.html", "Teknikprogrammet.html", "Inriktning.html"];

const pathLength = path.getTotalLength();
const pathLengthBackwards = pathBackWards.getTotalLength();

// Initialize the stored index from localStorage (if it exists)
let currentPageIndex = parseInt(localStorage.getItem("currentPageIndex")) || 0;

const updatePageIndex = (index) => {
    return new Promise((resolve) => {
        currentPageIndex = Math.min(currentPageIndex + 1, links.length - 1); // Ensure it doesn't go out of bounds
        localStorage.setItem("currentPageIndex", currentPageIndex); // Save the updated index
        console.log("Updated Page Index: " + currentPageIndex);
        resolve();
    });
};

const updatePageIndexBackwards = (index) => {
    return new Promise((resolve) => {
        console.log("sdfsdfsdf")
        currentPageIndex = Math.max(currentPageIndex - 1, 0); // Ensure it doesn't go below 0
        localStorage.setItem("currentPageIndex", currentPageIndex); // Save the updated index
        console.log("Updated Page Index: " + currentPageIndex);
        resolve();
    });
};

// Set up initial path styles (No inline styles for stroke)
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = 0;  // This will be controlled by CSS

pathBackWards.style.strokeDasharray = pathLengthBackwards;
pathBackWards.style.strokeDashoffset = 0;  // This will be controlled by CSS

let progress = 0;
console.log("CurrentPageIndex: " + currentPageIndex);
console.log("Links: " + links);

path.classList.add("default");  // Add the 'default' class to start with fade effect
pathBackWards.classList.add("default")

// Handle scroll event - determining scroll direction
document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        // Scroll Down
        progress += event.deltaY * 0.0025;
        progress = Math.max(0, Math.min(1, progress));

        // Update the stroke-dashoffset to trace the path
        path.style.strokeDashoffset = pathLength * (1 - progress);

        // Toggle between states based on progress
        if (progress === 0) {
            path.classList.remove("scrolling");
            path.classList.add("default");
            path.style.strokeDashoffset = 0;
        } else if (progress === 1) {
            // Use a Promise to ensure sequential execution
            updatePageIndex(currentPageIndex).then(() => {
                // Add a delay before navigating to the new page
                setTimeout(() => {
                    window.location.href = "http://127.0.0.1:5500/" + links[currentPageIndex];
                }, 300); // 300 milliseconds delay
            });
        } else {
            path.classList.add("scrolling");
            path.classList.remove("default");
        }
    } else if (event.deltaY < 0) {

        console.log("Backwards scroll")

        // Scroll Up (handle back navigation)
        progress += Math.abs(event.deltaY) * 0.0025;
        progress = Math.max(0, Math.min(1, progress)); // Prevent progress from going negative

        // Update the stroke-dashoffset to reverse the path
        pathBackWards.style.strokeDashoffset = pathLength * (1 - progress);

        if (progress === 0) {
            // Decrement the page index (handle back scroll)
            updatePageIndexBackwards(currentPageIndex).then(() => {
                pathBackWards.classList.remove("scrolling");
                pathBackWards.classList.add("default");
                pathBackWards.style.strokeDashoffset = 0;
            });
        } else {
            pathBackWards.classList.add("scrolling");
            pathBackWards.classList.remove("default");
        }
    }
});
