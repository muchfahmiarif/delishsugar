// buat icon menu bar
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// membuat navbar ilang jika di scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

//header muncul saat di scroll
window.addEventListener("scroll", function(){
    var header1 = document.querySelector(".header");
    header1.classList.toggle('sticky', window.scrollY > 0);
});

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

// send email
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
    // statusTxt.style.color = "#d00000"; 
    statusTxt.style.display = "block";
    // statusTxt.innerText = "Sending your message...";
    // form.classList.add("disabled");

    //ajax 
    let xhr = new XMLHttpRequest(); //creating new xml, PERHATIKAN Https atau Htpp
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = () => { //once ajax load
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 and ready status is 4 means there is no any error
            let response = xhr.response; //storing ajax response in a response variable
            // console.log(response);
            //if response is an error like valid email address than we will change status color to red else reset the form
            if(response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed to send your message!")){
                statusTxt.style.color = "red"; 
            } else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                },3); // hide the statusTxt after 3 seconds if the message is sent
            }
            statusTxt.innerText = response;
            form.classList.remove("disabled");
        }
    }
    let formData = new FormData(form); //creating new FormData obj. This is used to send form data
    xhr.send(formData); //sending form data
}