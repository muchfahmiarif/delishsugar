// buat icon menu bar
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// konfigurasi tema gelap
let themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// membuat navbar ilang jika di scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}

// membuat scrip untuk product
let slides = document.querySelectorAll('.slide-container');
let index = 0

function next () {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev () {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}