// drop mobile navigation
function mobileNav() {
    var burger = document.getElementById("burger");
    var nav = document.querySelector("nav");
    var navContainer = document.querySelector(".nav-container");

    // transform burger to/ from X
    function activeBurger() {
        var bar1 = document.getElementById("bar1");
        var bar2 = document.getElementById("bar2");
        var bar3 = document.getElementById("bar3");

        bar1.classList.toggle("bar1-active");
        bar2.classList.toggle("bar2-active");
        bar3.classList.toggle("bar3-active");
    }

    burger.addEventListener('click', () => {
        activeBurger();
        nav.classList.toggle("drop-nav");
        navContainer.classList.toggle("nav-container-active");
    });
}

// different class for active page
function activeNav() {
    var navLinks = document.querySelectorAll(".nav-link");
    var currentPage = window.location.href;

    for (i=0; i < navLinks.length; i++) {
        if (currentPage == navLinks[i].href) {
            navLinks[i].classList.toggle("nav-link-active");
        }
    }
}

// open viewer
function imageViewer(image="") {
    var playerWindow = document.getElementById("player");
    var focusImage = document.getElementById("focus-image");

    playerWindow.classList.toggle("player-active");
    console.log(image);
    focusImage.src = image;
}

// mobile height
function bodyHeight() {
    var container = document.querySelector(".container");
    var nav = document.getElementsByTagName("nav")[0];
    var footer = document.querySelector(".footer");

    function resizeContainer() {
        if (window.innerWidth < 500) {              // mobile
            navHeight = nav.offsetHeight;
        } else {                                    // computer
            navHeight = 0;
        }
        container.style["height"] = ((window.innerHeight - navHeight) - footer.offsetHeight) + "px";
    }
    if (container) {
        window.addEventListener("resize", resizeContainer);
        window.addEventListener("load", resizeContainer);        
    }
}

const app = () => {
    mobileNav();
    activeNav();
    bodyHeight();
}