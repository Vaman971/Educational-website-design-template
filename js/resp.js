burger= document.querySelector('.burger'); //will pick that one element of which you have entered the class
navbar= document.querySelector('.navbar');
rightNav= document.querySelector('.rightNav');
navList= document.querySelector('.nav-list');


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp'); //toggle will just remove the class on click if its there and will re-make the class on click if its not there
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})