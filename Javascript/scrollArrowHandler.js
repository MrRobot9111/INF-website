const path = document.querySelector(".arrow-path path");
const links = ["index.html", "Teknikprogrammet.html"]
const pathLength = path.getTotalLength();

// Set up initial path styles (No inline styles for stroke)
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = 0;  // This will be controlled by CSS

let progress = 0;
let currentPageIndex = 0;
console.log("CurrentPageIndex: " + currentPageIndex)
console.log("Links: " + links)

path.classList.add("default");  // Add the 'default' class to start with fade effect

// Handle scroll event - but look into how to determine the scroll direction
document.addEventListener("wheel", (event) => {

    if (event.deltaY > 0) {
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
            currentPageIndex++;
    
            // Add a delay before navigating to the new page
            setTimeout(() => {
                window.location.href = "http://127.0.0.1:5500/Html/" + links[currentPageIndex];
                //window.location.href = "http://127.0.0.1:5500/Html/Teknikprogrammet.html";
            }, 300); // 3000 milliseconds (3 seconds) delay
    
        } else {
            path.classList.add("scrolling");
            path.classList.remove("default");
        }
    } else if (event.deltaY < 0) {
        
    }


});

// The error is that the varibles are not reset and the script is not loaded until every html is.