import "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
import "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"

$("#btn1").click(function() {
    $("#box").hide();
});

$("#btn2").click(function() {
    $("#box").show();
});

$("#btn3").click(function() {
    $("#box").toggle();
});

$("#btn4").click(function() {
    $("#box").fadeOut();
});

$("#btn5").click(function() {
    $("#box").fadeIn();
});

$("#btn6").click(function() {
    $("#box").animate({ left: '200px' }, 'slow');
});

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();

    var tween = gsap.fromTo("#rickroll", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".scroll-trigger",
        offset: 0,
        duration: "50%",
    })
    .setTween(tween) 
    .addIndicators() 
    .addTo(controller);

    scene.on("enter", function () {
        document.getElementById("myVideo").play();
    }).on("leave", function () {
        document.getElementById("myVideo").pause();
    });
});
