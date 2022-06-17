$(document).ready(function() {
    var navContainer = $("#nav-container");
    var navItems = $("#nav-links");
    var burger = $("#burger");
    var template = document.querySelector("#project-template");
    var sentinel = document.querySelector("#sentinel");
    var trans = 50;
    var counter = 0;

    // Resize Window >> Show Nav
    $(window).on('resize', function() {
        var win = $(window);
        if (win.width() > 700) {        // desktop
            navContainer.show();
        } else {                        // mobile
            navContainer.hide();
            $("#bar1").animate({margin: '3px 0px'}, trans);
            $("#bar3").animate({margin: '3px 0px'}, trans);
        }
    });

    // Click Burger
    burger.click(function() {
        if ($(navItems).is(":hidden")) {
            $("#bar1").animate({margin: '0px 0px 8px 0px'}, trans);
            $("#bar3").animate({margin: '8px 0px 0px 0px'}, trans);
            navContainer.slideDown(200);
        } else {
            $("#bar1").animate({margin: '3px 0px'}, trans);
            $("#bar3").animate({margin: '3px 0px'}, trans);
            navContainer.slideUp(200);
        }
    });

    // Highlight Active Nav Elem
    $("#nav-links li").each(function() {
        if ($(this).find("a").attr('href') === window.location.pathname) {
            $(this).find("a").toggleClass("link-active-underline");
        }
    });

    // Load Items
    function loadItems() {
        let page = window.location.pathname.split("/").pop();
        
        fetch(`/load?items=${counter}&page=${page}`)
            .then((response) => {
            response.json().then((data) => {
                console.log(data)
                // Clone template
                let template_clone = template.content.cloneNode(true);
                template_clone.querySelector("#title").innerHTML = "Test";
                template_clone.querySelector("#subtitle").innerHTML = "Blah"
                
                document.querySelector("#entries").appendChild(template_clone);
            })
        });
    }

    var intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) {
            return;
        }
        loadItems();
    });
    intersectionObserver.observe(sentinel);
});

// // open viewer
// function viewer(source="", mediaType="", title="") {
//     var playerWindow = document.getElementById("player");
//     var focusContainer = document.getElementById("focus-container");

//     if (mediaType == "video") {
//         // display iframe
//         var frame = document.createElement("iframe");
//         frame.src = source;
//         frame.width = "720";
//         frame.height = "480";
//         frame.border = "0";
//         frame.id = "focus-item";
//         frame.title = title;
//         frame.allowFullscreen = true;
//         focusContainer.appendChild(frame);
//     } else if (mediaType == "image") {
//         // display image
//         var image = document.createElement("img");
//         image.id = "focus-item";
//         image.src = source;
//         image.alt = title;
//         focusContainer.appendChild(image);
//     } else {
//         // clear focus container
//         focusContainer.innerHTML = "";
//     }

//     // display viewer
//     playerWindow.classList.toggle("player-active");
// }