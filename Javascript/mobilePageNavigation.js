// Javascript shares functions between .js files

if (isMobile()) {

    const forewardArrow = document.querySelector(".arrow-foreward");
    const backwardArrow = document.querySelector(".arrow-back");

    const links = ["index.html", "Teknikprogrammet.html", "Inriktning.html", "Kurser.html", "Larare.html"];

    const getCurrentPageIndex = () => {
        const currentFileName = window.location.pathname.split("/").pop(); // Get the current file name
        const index = links.indexOf(currentFileName); // Find the index of the file name in the links array
    
        return index !== -1 ? index : 0; // Default to 0 if not found
    };

    // Initialize the stored index from the current page URL
    let currentPageIndex = getCurrentPageIndex();
    localStorage.setItem("currentPageIndex", currentPageIndex); // Store it for consistency

    console.log("Initial Page Index (based on URL): " + currentPageIndex);

    const updatePageIndex = (index) => {
        return new Promise((resolve) => {
            console.log("Updated Page Index: " + currentPageIndex);
            currentPageIndex = Math.min(currentPageIndex + 1, links.length - 1); // Ensure it doesn't go out of bounds
            localStorage.setItem("currentPageIndex", currentPageIndex); // Save the updated index
            console.log("Updated Page Index: " + currentPageIndex);
            resolve();
        });
    };

    const updatePageIndexBackwards = (index) => {
        return new Promise((resolve) => {
            currentPageIndex = Math.max(currentPageIndex - 1, 0); // Ensure it doesn't go below 0
            localStorage.setItem("currentPageIndex", currentPageIndex); // Save the updated index
            console.log("Updated Page Index: " + currentPageIndex);
            resolve();
        });
    };

    // Listen for events on the arrows on the page and change the index accordingly

    forewardArrow.addEventListener("click", (event) => {
        updatePageIndex(currentPageIndex).then(() => {
            setTimeout(() => {
                window.location.href = `${window.location.origin}/${links[currentPageIndex]}`;
            }, 300);
        });
    })

    backwardArrow.addEventListener("click", (event) => {
        updatePageIndexBackwards(currentPageIndex).then(() => {
            setTimeout(() => {
                window.location.href = `${window.location.origin}/${links[currentPageIndex]}`;
            }, 300);
        });
    })

}