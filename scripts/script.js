gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".mwrap",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
    }
});

gsap.to('.cards', {
    y: 150,
    scrollTrigger: {
        trigger: '.cards',
        scrub: 2,
        start:'center center'
    }
})
gsap.to('.bg-green', {
    backgroundColor:'#fff',
    scrollTrigger: {
        trigger: '.bg-green',
        scrub: 2,
        start:'right right',
    }
})
gsap.to('.black__squad', {
    width:'50%',
    height:'100%',
    scrollTrigger: {
        trigger: '.bg-green',
        scrub: 2,
        start:'left -200% right',
        markers:true
    }
})




gsap.to('.services__img_2', {
    x:-100,
    autoAlpha:0,
    scrollTrigger: {
        trigger: '.bg-green',
        scrub: 2,
        start:'left -200% right',
        markers:true,
    }
})
gsap.to('.services__img_1', {
    x:-100,
    autoAlpha:0,
    scrollTrigger: {
        trigger: '.bg-green',
        scrub: 2,
        start:'left -200% right',
        markers:true,
    }
})
gsap.from('.round_1', {
    autoAlpha:0,
    y: -200,
    ease: 'Bounce.easeOut',
    duration: 3,
    scrollTrigger: {
        trigger: '.round_1',
        scrub:1,
        start:'center center'
    }
})
gsap.from('.round_2', {
    autoAlpha:0,
    y: -200,
    ease: 'Bounce.easeOut',
    duration: 3,
    scrollTrigger: {
        trigger: '.round_2',
        scrub:1,
        start:'center center'
    }
})

