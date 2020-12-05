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
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click',(e)=>{
    const target = e.target;
    const link = target.dataset.link;

    if(link==null) {
        return;
    }
    navbarMenu.classList.remove('open');
    //console.log(e.target.dataset.link); //우리가 data-link로 정의한 요소가 클릭하면 나온다
    scrollIntoView(link);
});


//navbar toggle

const navbarToggleBtn = document.querySelector('.navbar_toggle');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
});


//handle click on "contact me" button on home

const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});


//Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    //console.log(1- window.scrollY / homeHeight);
    /*
    scroll이 800이고 homeheight가 800일 때 -> 1-1= 0 투명
    scroll이 0이고 homeheight가 800일 때 -> 1-0= 1 불투명
    */
   home.style.opacity = 1- window.scrollY / homeHeight;

});


//arrow up button(스크롤을 내리면 생기게)

const arrowUp =document.querySelector('.arrow_up');
document.addEventListener('scroll', () =>{
    if(window.scrollY>homeHeight/2){   
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});


//handle arrow button

arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});




//work flitering

const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(e)=>{
    const fliter = e.target.dataset.fliter || e.target.parentNode.dataset.fliter;
    if(fliter==null){
        return;
    }

   const acitve = document.querySelector('.work_btn.selected');
   
   acitve.classList.remove('selected');
   
   const target =  
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
   target.classList.add('selected');
    
   
   projectContainer.classList.add('ani-out');
    setTimeout(()=>{
        
        //배열 형태로 프로젝트 가져온 후 필터링
        projects.forEach((project)=>{
            if(fliter === "all" || fliter === project.dataset.type) {
                project.classList.remove('invisible');
                //데이터 타입이 동일하면 보이게 'invisible 삭제'
            }else{
                project.classList.add('invisible');
            }
        });

        projectContainer.classList.remove('ani-out');
    },300);
    

});


//메소드로 추출

function scrollIntoView(selector) {
    const scollTo = document.querySelector(selector);
    scollTo.scrollIntoView({behavior : "smooth"});
}




