const menu = document.getElementById('mobile-menu');
const menuLinks=document.querySelector('.navbar_menu');
const navLogo =document.querySelector('#navbar-logo');
const body=document.querySelector('body')

//Display Mobile menu

const mobileMenu=()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu)

// amimations
// utixing scroll trigger plugin
 gsap.registerPlugin(ScrollTrigger) 

 gsap.from('.animate-hero',{
     duration: 0.6,
     opacity:0,
     y:-150,
     stagger:0.3
 });


 gsap.from('.animate-services',{
     scrollTrigger:'.animate-services',
     duration: 0.5,
     opacity:1,
     x:-150,
     stagger:0.12
 });

 gsap.from('.animate-img',{
    scrollTrigger:'.animate-services',
    duration: 1.2,
    opacity:0,
    x:-200,
    
});

gsap.from('.animate-mem',{
    scrollTrigger:'.animate-mem',
    duration: 1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.5
});
gsap.from('.animate-card',{
    scrollTrigger:'.animate-card',
    duration: 1,
    opacity:0,
    y:-150,
    stagger:0.1,
    delay:0.2
});
gsap.from('.animate-team',{
    scrollTrigger:'.animate-team',
    duration: 1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.2
});
gsap.from('.animate-email',{
    scrollTrigger:'.animate-email',
    duration: 2.8,
    opacity:0,
    y:-150,
    stagger:0.25,
    delay:0.6
});