const mobileNav = document.querySelector('nav');
const burgerBtn = document.querySelector('.hamburger');
const header = document.querySelector('.header');









burgerBtn.addEventListener('click', function(){
    mobileNav.classList.toggle('nav-mobile-active')
    burgerBtn.classList.toggle('is-active')
    
})

const stickHeader = () => {
    const scroll = window.scrollY;

    if (scroll > 0){
    header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
};










window.addEventListener('scroll', stickHeader);