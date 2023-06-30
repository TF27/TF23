<<<<<<< HEAD
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // navMenu[1].classList.toggle("active");
    // navMenu[2].classList.toggle("active");
    // navMenu[3].classList.toggle("active");
    // navMenu[4].classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");  
=======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // navMenu[1].classList.toggle("active");
    // navMenu[2].classList.toggle("active");
    // navMenu[3].classList.toggle("active");
    // navMenu[4].classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");  
>>>>>>> e069a186cc5b17bd3288b9b9709438d5615e8208
}))