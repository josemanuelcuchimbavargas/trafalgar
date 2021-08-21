let navToggle = document.querySelector('.navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');
let body  = document.querySelector('body');
let btnClose = document.querySelector('.btn-equis-close');

navToggle.addEventListener('click',()=>{
    body.classList.add('body-scroll');
});

btnClose.addEventListener('click',()=>{
    body.classList.remove('body-scroll');
    navCollapse.classList.remove('show');
});

