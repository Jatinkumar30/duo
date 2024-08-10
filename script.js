function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var cursr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",(move)=>{
    cursr.style.left = move.x + 10 + "px"
    cursr.style.top = move.y + 10 + "px"
})


var vid = document.querySelector("video")
vid.addEventListener("mouseenter",()=>{
    cursr.classList.replace("cursor","cursor-video")
})
vid.addEventListener("mouseleave",()=>{
    cursr.classList.replace("cursor-video","cursor")
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anim")
tl.to(".page1 h2",{
    x:100,
},"anim")
tl.to(".page1 video",{
    width:"90%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start:"top -115%",
        end:"top -120%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"white"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start:"top -485%",
        end:"top -500%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var att = e.getAttribute("data-image")
        cursr.style.width="380px"
        cursr.style.height="300px"
        cursr.style.borderRadius = "0"
        cursr.style.backgroundImage = `url(${att})`
    })
})
boxes.forEach((e)=>{
    e.addEventListener("mouseleave",()=>{
        e.style.backgroundColor="transparent"
        cursr.style.width="15px"
        cursr.style.height="15px"
        cursr.style.borderRadius = "50%"
        cursr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        purple.style.display= "block"
        purple.style.opacity= "1" 
    })
    e.addEventListener("mouseleave",()=>{
        purple.style.display= "none"
        purple.style.opacity= "0"  
    })
})