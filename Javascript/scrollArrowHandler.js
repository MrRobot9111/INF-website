const path = document.querySelector(".arrow-path path");
const pathLength = path.getTotalLength();

// Set up initial path styles (No inline styles for stroke)
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = 0;  // This will be controlled by CSS

let progress = 0;

path.classList.add("default");  // Add the 'default' class to start with fade effect

// Handle scroll event
document.addEventListener("wheel", (event) => {
    progress += event.deltaY * 0.0025;
    progress = Math.max(0, Math.min(1, progress));

    // Update the stroke-dashoffset to trace the path
    path.style.strokeDashoffset = pathLength * (1 - progress);

    // Toggle between states based on progress
    if (progress === 0) {
        path.classList.remove("scrolling");
        path.classList.add("default");
        path.style.strokeDashoffset = 0;
    } else {
        path.classList.add("scrolling");
        path.classList.remove("default");
    }
});