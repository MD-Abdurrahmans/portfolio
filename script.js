// ==========================toggle menu navbar=======================


let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuicon.onclick=()=>{
menuicon.classList.toggle('bx-x');
navbar.classList.toggle('active');
}



// ==========================SCROLL SELECTION ACTIVE LINK=======================


let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec =>{
let top=window.scrollY;
let offset=sec.offsetTop-150;
let height=sec.offsetHeight;
let id=sec.getAttribute('id');

if(top>=offset && top<offset + height){


    navlinks.forEach(links=>{

        links.classList.remove('active');

        document.querySelector('header nav a[href*='+id+']').classList.add('active')
    })
}

    })
}

// ==========================Sticky navbar=======================



let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY >100);
// ==========================remove navbar when click on navlink=======================


menuicon.classList.remove('bx-x');
navbar.classList.remove('active');


// ==========================scroll reveal=======================


ScrollReveal({
    //  reset: true,
     distance:'50px',
     duration:2000,
     delay:200
    });


    ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });
    ScrollReveal().reveal('.home-content h1 ,.about-img', { origin:'left' });

    ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
    ScrollReveal().reveal('.home-img, .service-container,.portfolio-box,.contact-form', { origin:'bottom' });


    // ==========================type js from mattboldt/typejs=======================

const type = new Typed('.multiple-text',{

    strings:['Fontend Devloper','You TUBER','Graphics DESIGNER'],

    typeSpeed:100,
    backSpeed:200,
    backDelay:1000,
    loop:true

    

})
