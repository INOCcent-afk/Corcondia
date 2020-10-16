import gsap from "gsap";
import Swiper from 'swiper/bundle';
import barba from "@barba/core";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function headerInit() {
window.addEventListener("scroll", headerScroll);
}


function headerScroll() {
  const header = document.querySelector("header");
  const newHeader = document.querySelector(".newHeader");
  const burgers = document.querySelectorAll(".onlyB");
  const corcondias = document.querySelectorAll(".onlyT a");
  
  if (window.scrollY == 0) {
    header.style.background = "transparent";
    newHeader.style.background = "transparent";
    // burgers.forEach(burger => { 
    //   burger.style.background = "#f5f5f5";
    // });
    //   corcondias.forEach(corcondia => { 
    //   corcondia.style.color = "#f5f5f5";
    // });
 
  } else if (window.scrollY > 0) {
    header.style.backgroundColor = "#ffffff";
    newHeader.style.background = "#ffffff";
    //   burgers.forEach(burger => { 
    //   burger.style.background = "#a38f6e";
    // });
    //   corcondias.forEach(corcondia => { 
    //  corcondia.style.color = "#a38f6e";
    // });
  }
}



const hamburger = document.querySelectorAll(".hamburger");


hamburger.forEach(burger => {
  burger.addEventListener("click", (e) => {   
  
    if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl);
  })
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
gsap.config({
  nullTargetWarn: false,
});
// **********************
 let tl = gsap.timeline({paused: true, reversed: true});

  tl.to(".menu-appear", {
    duration: 0.3,
    opacity: "1",
    ease: "none",
    pointerEvents: "all",
  });
  tl.to("body", {
    duration: 0.3,
    overflow: "hidden",
    ease: "none",
  }, "-=0.3");
  tl.to("header", {
    duration: 0,
    background: "transparent",
    ease: "none",
  }, "-=0.3");
  tl.to(".newHeader", {
    duration: 0,
    background: "transparent",
    ease: "none",
  }, "-=0.3");
  tl.to(".logo a", { 
    duration: 0.3,
    color:"#a38f6e",
    ease:"none",
},"-=0.3");
  tl.to(".burger", { 
    duration: 0.3,
    backgroundColor:"#7a4f08",
    ease:"none",
},"-=0.3");
 tl.to(".burger", { 
    duration: 0.3,
    backgroundColor:"#7a4f08",
    ease:"none",
},"-=0.3");
 tl.to(".menu-appear-navLinks li", { 
    duration: 0.4,
      y: 0,
    // ease:"none",
    ease: "Power1.easeOut",
    stagger: 0.1,
    opacity: "1",
});
// **********************


const tl1 = gsap.timeline();
tl1.from(".animate-text", { 
  duration: 0.8,
  y:80,
  ease: "none",
  opacity: "0",
});

const tl2 = gsap.timeline();
tl2.from(".animate-text2", { 
  duration: 0.8,
  y:80,
  ease: "none",
  opacity: "0",
});

const tl3 = gsap.timeline();
tl2.from(".animate-text3", { 
  duration: 0.8,
  y:80,
  ease: "none",
  opacity: "0",
});

ScrollTrigger.create({
  animation: tl1,
  trigger: ".image-hero",
  start: "bottom bottom",
  end: "+=100",
  stagger: 0.2,
});

ScrollTrigger.create({
  animation: tl2,
  trigger: ".first-showcase",
  start: "center center",
  end: "+=100",
  stagger: 0.2,
});

ScrollTrigger.create({
  animation: tl3,
  trigger: ".second-showcase",
  start: "center center",
  end: "+=100",
  stagger: 0.2,
});




function swiperCon() {
const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
    spaceBetween: 20,

    pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: { 
     600: {
      slidesPerView: 1.5,
    },
    1000: {
      slidesPerView: 2,
    },

  }
})
}



function swiperInit() {
const mySwiper = new Swiper('.slider-container', {
  direction: 'horizontal',
  effect: 'fade',
  touchRatio: 0,
  loop: true,
      mousewheel: {
    invert: false,
  },
})
}

function aboutSwiper() {
const mySwiper = new Swiper('.about-swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
})
};

function anotherAboutSwiper() {
const mySwiper = new Swiper('.another-about-swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 40,
// breakpoints: { 
//      800: {
//       initialSlide:1,
//     },
//   }
})
};


const loadAni = (container) => {
return gsap.from(container, {autoAlpha: 0, duration: 2});
};

barba.hooks.leave(() => { 
      const t = document.querySelector(".menu-appear");
      if ( window.getComputedStyle(t).opacity === "1") {
        toggleTween(tl);
        loadAni(current.container);
       } else  { 
       loadAni(current.container);
    }
});

barba.hooks.enter(() => { 
  window.scrollTo(0,0)

});

barba.init({ 
    transitions: [
        {
        name: "development",
        to: { 
          namespace: ["development"],
        },
        once({next}) { 
          loadAni(next.container);
          swiperInit();
          headerInit(); 
          
        },
        enter({next}) { 
          loadAni(next.container);
             swiperInit();
             headerInit(); 
             
        },
      },
        {
        name: "works",
        to: { 
          namespace: ["works"],
        },
        once({next}) { 
          loadAni(next.container);
          swiperCon();
          headerInit(); 
          
        },
        enter({next}) { 
          loadAni(next.container);
            swiperCon();
             headerInit(); 
             
        },
      },
        {
        name: "about",
        to: { 
          namespace: ["about"],
        },
        once({next}) { 
          loadAni(next.container);
          aboutSwiper();
          anotherAboutSwiper();
          headerInit(); 
         
        },
        enter({next}) { 
             loadAni(next.container);
             aboutSwiper();
             anotherAboutSwiper();
             headerInit(); 
        },
      },
      {
        name: "general-transition",
        once({next}) { 
          loadAni(next.container);
         headerInit();  
          
        },
        enter({next}) { 
          loadAni(next.container);
          headerInit();  
        },
      },
    ],
})




