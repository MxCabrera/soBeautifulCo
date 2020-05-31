const app = {};
app.services = [
   {
      service: "Eyelash Extensions",
      type: [
         {
            name: "Classic Lash Extensions",
            price: 80.00,
            duration: "1hr 45mins" 
         }, {
            name: "Hybrid Lashes",
            price: 100.00,
            duration: "2hrs"
         }, {
            name: "Volume",
            price: 120.00,
            duration: "2hr 30mins"
         }
      ]
   }
]

app.getServices = () => {
   console.log(app.services[0].type[0].name)
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', ()=> {
   navLinks.classList.toggle('open');
   links.forEach(link => {
      link.classList.toggle('fade');
   })
})

$(function(){
   app.getServices()
})