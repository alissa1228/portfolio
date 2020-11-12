'use strict';

//Make navbar transparent when it is on the top 

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.clientHeight;

document.addEventListener('scroll',()=>{
    console.log(`navbarHeight:${navbarHeight}`);

    if(scrollY >navbarHeight/2) {
        navbar.classList.add('navbar-dark');
    }
    else{
        navbar.classList.remove('navbar-dark');
    }
});