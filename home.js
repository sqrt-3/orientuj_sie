function hamburgerMenu() {
    const navMenu = document.getElementById("myHamburgerMenu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none"
    } else {
        navMenu.style.display = "flex"
    }
}