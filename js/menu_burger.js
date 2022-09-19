const button = document.querySelector('.header_burger');
const menu = document.querySelector('.header_nav');

button.addEventListener('click',()=>{
    menu.classList.toggle('active');
})