var crsr = document.querySelector("#cursor");
var blur1 = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur1.style.left = dets.x - 250 + "px";
  blur1.style.top = dets.y - 250 + "px";
});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4;
    (crsr.style.backgroundColor = "transparent"),
      (crsr.style.border = ".1px solid white");
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    (crsr.style.backgroundColor = "#95c11e"),
      (crsr.style.border = "1px solid #95c11e");
  });
});

gsap.to("#nav", {
  backgroundColor: "black",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: false,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -32%",
    end: "top -70%,",
    scrub: 4,
  },
});
// gsap.to('cursor',{

// })
// tilt effect
document.addEventListener("DOMContentLoaded", function () {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15, // Maximum tilt angle in degrees
    speed: 900, // Speed of the effect
  });
});

gsap.from("#about-us img,#about-us-in", {
  y: 50, //y axis se uthe hoye ayen
  opacity: 0,
  duration: 1,
  stagger: 1, //aik ai kkrk ayen
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 65%",
    scrub: 7,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70, //y axis se uthe hoye ayen
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    markers: false,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70, //y axis se uthe hoye ayen
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    markers: false,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".card", {
  opacity: 0,
  duration: 1,
  stagger: 0.5, //aik ai kkrk ayen
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 65%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    markers: false,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   grabCursor:true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
