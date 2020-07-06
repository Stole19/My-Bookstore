// Sticky Navigation


let navbar = $('.navbar');

$(window).scroll(function () {

    let positionTop = $('.section-2').offset().top - window.innerHeight;

    if ($(window).scrollTop() > positionTop) {

        navbar.addClass('sticky');
    } else {

        navbar.removeClass('sticky');
    }
});




// Counter Animation

let numberCount = function (selector) {

    $(selector).each(function () {

        $(this).animate({

            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        })
    })
}

let a = 0;

$(window).scroll(function () {

    let positionTop = $('.numbers').offset().top - window.innerHeight;

    if (a == 0 && $(window).scrollTop() >= positionTop) {

        a++;

        numberCount('.rect > h1')
    }
})




// GSAP ANimation

let tl = gsap.timeline({ defaults: { duration: 1 } });
const controller = new ScrollMagic.Controller();

tl.from('.pray', {
    opacity: 0,
    duration: 1,
    x: -70,
    delay: 3,
    ease: 'power2easeInOut'
})

    .from('.panel', {
        opacity: 0,
        duration: 1,
        x: 30,
        ease: 'power2easeInOut',
    })

    .from('.anime-1', {
        opacity: 0,
        duration: 1,
        y: -30,
        ease: 'power2easeInOut',
        stagger: .9
    })

// const scene = new ScrollMagic.Scene({
//     triggerElement: ".section-1",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
//     .setPin(".section-1")
//     .setTween(tl)
//     .addTo(controller);