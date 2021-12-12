let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// javascript untuk load page
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })