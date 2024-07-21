burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
srchbr = document.querySelector('.srchbr')

burger.addEventListener('click', ()=>{
    srchbr.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
});