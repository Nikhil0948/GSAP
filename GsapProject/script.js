var tl = gsap.timeline()

tl.from("#nav h3", {
    y: -50,
    opacity: 0, 
    duration: 0.7,
    delay: 0.4,
    stagger: 0.2
})

tl.from("#main h1", {
    x: -500,
    delay: 0.3,
    opacity: 0, 
    duration: 0.8,
    stagger: 0.3
})

tl.from("img", {
    x: 100,
    opacity: 0, 
    rotate: 55,
    duration: 0.8,
    stagger: 0.2
})