// gsap.registerPlugin(ScrollTrigger);
// let sections = gsap.utils.toArray(".panel");
//
// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".mwrap",
//         pin: true,
//         scrub: 1,
//         snap: 1 / (sections.length - 1),
//         // base vertical scrolling on how wide the container is so it feels more natural.
//         end: "+=3500",
//     }
// });

gsap.to('.cards', {
    y: 150,
    scrollTrigger: {
        trigger: '.cards',
        scrub: 2,
        start:'center center'
    }
})

gsap.to('.black__squad', {
    width:'100%',
    scrollTrigger: {
        trigger: '.bg-green',
        scrub: 2,
        start:'top center',
    }
})

gsap.to('.services__header', {
    color:'#000',
    scrollTrigger: {
        trigger: '.services__header',
        scrub: 2,
        start:'top center',
    }
})



let tl = gsap.timeline();
tl.to('.bg-green', {
    backgroundColor:'#ffdf40',
    scrollTrigger: {
        trigger: '.bg-green',
        scrub: 2,
        pin:true
    }
}).to('.services__img_2', {
    scale:1.2,
    scrollTrigger: {
        trigger: '.services__img_2',
        scrub: 2,
        start:'top center',
    }
}).to('.services__img_1', {
    scale:1.2,
    scrollTrigger: {
        trigger: '.services__img_1',
        scrub: 2,
        start:'top center',
    }
})

let lines = document.querySelectorAll('.line-design_line');
lines.forEach((line, index) => {
    gsap.to(line, {
        width: '100vw',
        duration:5,
        scrollTrigger: {
            trigger: line,
            scrub: 4,
            start:'bottom bottom',
        }
    })
})
gsap.from('.round_1', {
    autoAlpha:0,
    y: -200,
    ease: 'Bounce.easeOut',
    duration: 3,
    scrollTrigger:{
        trigger: '.round_1',
        scrub:true,
    }
})
gsap.from('.round_2', {
    autoAlpha:0,
    y: -200,
    ease: 'Bounce.easeOut',
    duration: 1,
    scrollTrigger:{
        trigger: '.round_2',
        scrub:true,
    }
})

