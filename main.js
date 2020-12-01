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


// scoll to section(Handle scolling when tapping on the navbar menu)

/*1. 클릭을 했을 때 원하는 아이디를 알아야함
2. 눌렀을 때 좌표로 스크롤링
*/
const navbarmenu = document.querySelector('.navbar_menu');
navbarmenu.addEventListener('click',(e)=>{
    const target = e.target;
    const link = target.dataset.link;

    if(link==null) {
        return;
    }
    //console.log(e.target.dataset.link); //우리가 data-link로 정의한 요소가 클릭하면 나온다
    scrollIntoView(link);
});


//handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

//메소드로 추출

function scrollIntoView(selector) {
    const scollTo = document.querySelector(selector);
    scollTo.scrollIntoView({behavior : "smooth"});
}