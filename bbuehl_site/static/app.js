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
function viewer(source="", mediaType="", title="") {
    var playerWindow = document.getElementById("player");
    var focusContainer = document.getElementById("focus-container");

    if (mediaType == "video") {
        // display iframe
        var frame = document.createElement("iframe");
        frame.src = source;
        frame.width = "720";
        frame.height = "480";
        frame.border = "0";
        frame.id = "focus-item";
        frame.title = title;
        frame.allowFullscreen = true;
        focusContainer.appendChild(frame);
    } else if (mediaType == "image") {
        // display image
        var image = document.createElement("img");
        image.id = "focus-item";
        image.src = source;
        image.alt = title;
        focusContainer.appendChild(image);
    } else {
        // clear focus container
        focusContainer.innerHTML = "";
    }

    // display viewer
    playerWindow.classList.toggle("player-active");
}

// mobile height
function bodyHeight() {
    var container = document.querySelector(".container");

    function resizeContainer() {
        if (window.innerWidth <= 500) {              // mobile
            navHeight = 60;
        } else {                                    // computer
            navHeight = 0;
        }
        container.style["height"] = ((window.innerHeight - 34) - navHeight) + "px";
    }
    if (container){
        window.addEventListener("resize", resizeContainer);
        window.addEventListener("load", resizeContainer);
    }

}

const app = () => {
    mobileNav();
    activeNav();
    bodyHeight();
}