Shery.mouseFollower();
Shery.makeMagnet(".magnet , .btn");
Shery.hoverWithMediaCircle(".hvr" , {videos : ["assets/videos/1.mp4","assets/videos/2.mp4","assets/videos/3.mp4"]});



gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger :"#featuredimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1,
});


let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect("#images", {
    style: 4,
    // config: {onMouse : {value: 1}},
    slideStyle: (setScroll) => {
  sections.forEach((section,idx)=>{
ScrollTrigger.create({
    trigger:section,
    start:"top top",
    scrub:1,
    onUpdate:(prog)=>{
setScroll(prog.progress+idx)
    },
});
  });
    },
  });








  