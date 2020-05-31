const app = {};
app.services = [
   {
      service: "Eyelash Extensions",
      info: "Longer & Fuller lashes? I'm in! At SoBeautiful&Co we create custom lash sets for each of our clients. By carefully assessing clients natural lashes, we will be able to create a custom lash set that makes you feel ???",
      type: [
         {
            name: "Classic Lash Extensions",
            price: 80.00,
            duration: "1hr 45mins", 
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
   },{
      service: "Refills",
      info: "Clients must have 40% lashes to be considered a fill",
      type: [
         {
            name: "Classic Lash Extension",
            price: 50.00,
            duration: "45mins"
         }, {
            name: "Hybrid Lash Extensions",
            price: 65.00,
            duration: "45mins"
         }, {
            name: "Volume Lash Extensions",
            price: 50.00,
            duration: "45mins"
         }
      ]
   }, {
      service: "Brow Lamination",
      info: "Fluffy Brows are a HOT trend. At SoBeautiful&Co we will be able to create a fluffy, brushed up brow look resulting in a more fuller, symmetrical brow that last approximately 6-8 weeks",
      type: [
         {
            name: "No Tint",
            price: 60.00,
            duration: "45mins"
         }, {
            name: "With Tint",
            price: 80.00,
            duration: "15mins",
            tip: "*Note* - Tinting can be done 1 week AFTER Brow Lamination"
         }
      ]
   }, {
      service: "Spray Tan",
      info: "Wishing you could tan but see no sun? At SoBeautiful&Co summer is all year round! Within minutes, you can achieve that desired golden glow. All tanning products used are by NUDA© Canada",
      type: [
         {
            name: "Full Body",
            price: 45.00,
            duration: "10mins"
         }, {
            name: "Extra Coat",
            price: 10.00,
            duration: "10mins",
         }
      ]
   }, {
      service: "Teeth Whitening",
      info: "Looking to a brighter & whiter smile? At SoBeautiful&Co pearly whites are achieveable within minutes!",
      type: [
         {
            name: "Cosmetic Whitening",
            price: 100.00,
            duration: "1hr"
         }
      ]
   }, {
      service: "Make Up",
      info: "Makeup only available mobile",
      type: [
         {
            name: "Full Glam",
            price: 85.00,
            duration: "2hrs"
         }, {
            name: "Natural",
            price: 65.00,
            duration: "1hr 30mins",
         }
      ]
   }
]


app.getServices = () => {
   console.log(app.services[0].type[0].name)
   app.services.map((stuff) => {
      $('.allServices').append(`
         <div class="serviceContainer"> 
            <h3>${stuff.service}</h3>
            <p class="serviceInfo">${stuff.info}</p>
            <div class="productType">
               ${stuff.type.map((moreStuff)=>{
                  console.log(moreStuff)
                  return(`
                     <div class="individualProduct">
                        <p class="serviceName">${moreStuff.name}</p>
                        <p>Price: $${moreStuff.price}.00</p>
                        <p>Duration: ${moreStuff.duration}</p>
                     </div>
                     `)
               }).join('')}
            </div>
               <a href="./contact.html"><button>Book Now</button></a>
         </div>
      `)
   })
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