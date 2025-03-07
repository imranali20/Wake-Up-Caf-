// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.querySelector(".hamburger");
//     const mobileMenu = document.querySelector(".mobile-menu");

//     hamburger.addEventListener("click", function () {
//         mobileMenu.classList.toggle("active");
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu ul li a");

    // Toggle menu when clicking the hamburger
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking a menu link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    });
});


