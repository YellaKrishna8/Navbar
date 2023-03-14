const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");

hamburger.addEventListener ("click", ()=> {
  navBar.classList.toggle("active");
  console.log("Hello world");
})
