if (isMobile()) {

    const exitIcon = document.querySelector(".exit-icon");
    const hamburgerMenu = document.querySelector("#hamburger-menu-icon");
    const homeIcon = document.querySelector("#tycho-brahe-nav-icon");
    const navDropdown = document.querySelector(".nav-dropdown");

    exitIcon.addEventListener("click", (event) => {
        navDropdown.classList.toggle("show")
    })

    hamburgerMenu.addEventListener("click", (event) => {
        navDropdown.classList.toggle("show")
    })

    homeIcon.addEventListener("click", (event) => {
        window.location.href = `${window.location.origin}/index.html`
    })
}

