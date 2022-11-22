gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





// toggle

const toggle = document.querySelector(".toggle");
const toggleR = document.querySelector(".toggle-remove");

const cros = document.querySelector(".fa-solid");
const menu = document.querySelector(".fa-menu");



cros.addEventListener("click" , function(){
    // cros.style.rotate ="360deg"
    toggleR.style.top = "-100vh";
})

menu.addEventListener("click" , function(){
    toggleR.style.top = "100vh";
    // menu.style.rotate = "10deg";
    // menu.style.scale = "0.5";
    // console.log("hey")
})

// tpggle



menu.addEventListener("click" , function(){
    

    gsap.from(".toggle .t-menu , .fruit h3" , {
        opacity: 0,
        // delay:2,
        duration:1,
        y:"-50px",
        scrollTrigger:{
            trigger:".toggle",
            scroller:".toggle",
            // markers:true,
            start:"top 80%",
            // end:"top -150%",
            // scrub:1,
            // pin:true
        }
    })
    
})



// -----------------------------  contaier-1 ---------------------- 


gsap.from(".h-1 ", {
    opacity:0,
    // x:'200px',
    duration:1,
    onStart:function(){
        $('.h-1 ').textillate({ in: { effect: 'fadeInUp' } });  
    }
})
// $('.h-2').textillate({ in: { effect: 'fadeInUpBig' } });


gsap.from(".r-circle ", {
    opacity:0,
    y:'200px',
    duration:1,
})
gsap.from(".lower h4", {
    opacity:0,
    delay:0.8,
    y:'50px',
    duration:1,
    scrollTrigger:{
        trigger:".lower h4",
        scroller:".main",
        // marker:true,
        start:"top 75%",
    }
})

gsap.from(".lower h5 ", {
    opacity:0,
    delay:0.8,
    y:'50px',
    duration:1,
})

// image----------------------

gsap.to(".iii" , {
    // opacity: 0,
    scale:1.2,
    // delay:2,
    duration:2,
    y:"-50px",
    scrollTrigger:{
        trigger:".iii",
        scroller:".main",
        // markers:true,
        start:"top 75%",
        scrub:1,
        // pin:true
    }
})

// gsap.to(".container-4 .line" , {
//     width:90,
//     scale:1.5,
//     duration:2,
//     scrollTrigger:{
//         trigger:".container-4 .line",
//         scroller:"main",
//         scrub:1,
//     }
// })

gsap.to(".line" , {
    // y:"200px",
    // width:10,
    // delay:2,
    duration:1,
    x:'1640px',
    scrollTrigger:{
        trigger:".line",
        scroller:".main",
        // markers:true,
        start:"top 70%",
        scrub:1,
        // pin:true
    }
})




// ------------------ mango  Banana------------------------------


const VarietyRec = document.querySelector(".Variety-rec" );
const div = document.querySelector(".div" );


VarietyRec.addEventListener("mouseover" , function(){
    div.classList.add("Variety-css");


    // window.document.querySelector('mousemove' , function(details){
    
    //     let VarietyRec = document.querySelector('.div');
    
    //     let xValue = details.pageX;
    //     let yValue = details.pageY;
    
    //     this.setTimeout(function(){
    
    //         circle.style.top = yValue - 170 + 'px';
    //         circle.style.left = xValue -150 + 'px';
    
    //     } ,100)
    // })
    
},false);

VarietyRec.addEventListener("mouseout" , function(){
    div.classList.remove("Variety-css");

}, false);




// const cont4 = document.querySelector(".container-4" );

// cont4.addEventListener('mousemove' , function(details){
    
//     let circle = document.querySelector('.bana');

//     let xValue = details.pageX;
//     let yValue = details.pageY;

//     this.setTimeout(function(){

//         circle.style.top = yValue - 170 + 'px';
//         circle.style.left = xValue -150 + 'px';

//     } ,100)
// })


// mango-rec-----------------------------

const mangoRec = document.querySelector(".mango-rec" );

mangoRec.addEventListener("mouseover" , function(){
    div.classList.add("mango-css");

},false);

mangoRec.addEventListener("mouseout" , function(){
    div.classList.remove("mango-css");

}, false);

// pine-rec--------------------------------------

const pineRec = document.querySelector(".pine-rec" );

pineRec.addEventListener("mouseover" , function(){
    div.classList.add("pine-css");

},false);

pineRec.addEventListener("mouseout" , function(){
    div.classList.remove("pine-css")
}, false);

// pita--------------
const pitaRec = document.querySelector(".pita-rec" );

pitaRec.addEventListener("mouseover" , function(){
    div.classList.add("pita-css");

},false);

pitaRec.addEventListener("mouseout" , function(){
    div.classList.remove("pita-css");

}, false);


// banana--------------

const bananaRec = document.querySelector(".banana-rec" );

bananaRec.addEventListener("mouseover" , function(){
    div.classList.add("banana-css");

},false);

bananaRec.addEventListener("mouseout" , function(){
    div.classList.remove("banana-css");

}, false);

// ---------------contaoner-6--------------

// star wall-paper

particlesJS("particles-js", {"particles":{"number":{"value":431,"density":{"enable":false,"value_area":800}},
"color":{"value":"#fafafa"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":
{"nb_sides":8},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,
"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":2.1,"random":true,"anim":
{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":0,"color":
"#ffffff","opacity":1,"width":0},"move":{"enable":true,"speed":0.7,"direction":"none","random":true,
"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":8402.823348645139,
"rotateY":8642.904015749287}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,
"mode":"bubble"},/*"onclick":{"enable":true,"mode":"repulse"} ,*/"resize":true},"modes":{"grab":{"distance":400,
"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},
"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(); 
stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles'); 

  update = function() { stats.begin(); stats.end();
     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
     { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
      requestAnimationFrame(update); }; requestAnimationFrame(update);;


//

gsap.from("#particles-js h1" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:3,
    y:"100px",
    scrollTrigger:{
        trigger:"#particles-js h1",
        scroller:".main",
        // markers:true,
        start:"top 70%",
        scrub:1,
        end:"top 85%",

        // pin:true
    }
})
gsap.from("#particles-js h2" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:3,
    y:"100px",
    scrollTrigger:{
        trigger:"#particles-js h2",
        scroller:".main",
        // markers:true,
        start:"top 80%",
        scrub:1,
        end:"top 85%",

        // pin:true
    }
})


// -----container - 7-------------


gsap.from(".container-7 h1" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:1,
    y:"100px",
    scrollTrigger:{
        trigger:".container-7 h1",
        scroller:".main",
        // markers:true,
        start:"top 55%",
        scrub:1,
        end:"top 85%",
    }
})
gsap.from(".container-7 h2" , {
    opacity: 0,
    duration:1,
    y:"100px",
    scrollTrigger:{
        trigger:".container-7 h2",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        scrub:1,
        end:"top 85%",
    }
})



//   picture ----------------------------


gsap.from(".image-11 .img-1" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:1,
    y:"100px",
    scrollTrigger:{
        trigger:".image-11 .img-1",
        scroller:".main",
        // markers:true,
        start:"top 85%",
        end : "top 70%",
        scrub:1,
        // pin:true
    }
})

gsap.from(".image-11 .img-2" , {
    opacity: 0,
    // scale:1.2,
    // delay:0.5,
    duration:1,
    y:"170px",
    scrollTrigger:{
        trigger:".image-11 .img-2",
        scroller:".main",
        // markers:true,
        start:"top 85%",
        scrub:1,
        end : "top 70%",
        // pin:true
    }
})

gsap.from(".image-11 .img-3" , {
    opacity: 0,
    // scale:1.2,
    // delay:0.5,
    duration:1,
    y:"220px",
    scrollTrigger:{
        trigger:".image-11 .img-3",
        scroller:".main",
        // markers:true,
        start:"top 80%",
        end : "top 70%",
        scrub:1,

        // pin:true
    }
})
gsap.from(".image-11 .img-4" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:1,
    y:"250px",
    scrollTrigger:{
        trigger:".image-11 .img-4",
        scroller:".main",
        // markers:true,
        start:"top 80%",
        end : "top 70%",
        scrub:1,
        // pin:true
    }
})

gsap.from(".image-11 .img-5" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:1,
    y:"100px",
    scrollTrigger:{
        trigger:".image-11 .img-5",
        scroller:".main",
        // markers:true,
        start:"top 95%",
        end : "top 78%",
        scrub:1,
        // pin:true
    }
})

gsap.from(".image-11 .img-6" , {
    opacity: 0,
    // scale:1.2,
    // delay:0.5,
    duration:1,
    y:"170px",
    scrollTrigger:{
        trigger:".image-11 .img-6",
        scroller:".main",
        // markers:true,
        start:"top 95%",
        scrub:1,
        end : "top 78%",
        // pin:true
    }
})

gsap.from(".image-11 .img-7" , {
    opacity: 0,
    // scale:1.2,
    // delay:0.5,
    duration:1,
    y:"220px",
    scrollTrigger:{
        trigger:".image-11 .img-7",
        scroller:".main",
        // markers:true,
        start:"top 95%",
        end : "top 78%",
        scrub:1,

        // pin:true
    }
})
gsap.from(".image-11 .img-8" , {
    opacity: 0,
    // scale:1.2,
    // delay:2,
    duration:1,
    y:"250px",
    scrollTrigger:{
        trigger:".image-11 .img-8",
        scroller:".main",
        // markers:true,
        start:"top 95%",
        end : "top 87%",
        scrub:1,
        // pin:true
    }
})