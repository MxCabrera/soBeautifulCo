// const navSlide = () => {
//    const burger = document.querySelector('.burger');
//    const nav = document.querySelector('.ul');

//    burger.addEventListener('click', ()=>{
//       nav.classList.toggle('.nav-links')
//    })
// }

// const app = () => {
//    navSlide()
// } 

// app()

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', ()=> {
   navLinks.classList.toggle('open');
   links.forEach(link => {
      link.classList.toggle('fade');
   })
})

