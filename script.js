const app = {};
app.services = [
   {
      service: "Eyelash Extensions",
      info: "Longer & Fuller lashes? I'm in! At SoBeautiful&Co we create custom lash sets for each of our clients. By carefully assessing clients natural lashes, we will be able to create a custom lash set that makes you feel SoBeautiful!",
      id: "eyelashExt",
      type: [
         {
            name: "Classic Lash Extensions",
            price: 80.00,
            duration: "1hr 45mins",
            class: "eyelash1" 
         }, {
            name: "Hybrid Lashes",
            price: 100.00,
            duration: "2hrs",
            class: "eyelash2"
         }, {
            name: "Volume",
            price: 120.00,
            duration: "2hr 30mins",
            class: "eyelash3"
            
         }
      ]
   },{
      service: "Refills",
      info: "Clients must have 40% lashes to be considered a fill",
      id: "refillz",
      type: [
         {
            name: "Classic Lash Extension",
            price: 50.00,
            duration: "45mins",
            class: "refill1"
         }, {
            name: "Hybrid Lash Extensions",
            price: 65.00,
            duration: "45mins",
            class: "refill2"
         }, {
            name: "Volume Lash Extensions",
            price: 50.00,
            duration: "45mins",
            class: "refill3"
         }
      ]
   }, {
      service: "Brow Lamination",
      info: "Fluffy Brows are a HOT trend. At SoBeautiful&Co we will be able to create a fluffy, brushed up brow look resulting in a more fuller, symmetrical brow that last approximately 6-8 weeks",
      id: "browLamz",
      type: [
         {
            name: "No Tint",
            price: 60.00,
            duration: "45mins",
            class: "brow1"
         }, {
            name: "With Tint",
            price: 80.00,
            duration: "15mins",
            class: "brow2",
            tip: "*Note* - Tinting can be done 1 week AFTER Brow Lamination"
         }
      ]
   }, {
      service: "Spray Tan",
      info: "Wishing you could tan but see no sun? At SoBeautiful&Co summer is all year round! Within minutes, you can achieve that desired golden glow. All tanning products used are by NUDA© Canada",
      id: "sprayTanz",
      type: [
         {
            name: "Full Body",
            price: 45.00,
            duration: "10mins",
            class: "spray1"
         }, {
            name: "Extra Coat",
            price: 10.00,
            duration: "10mins",
            class: "spray2"
         }
      ]
   }, {
      service: "Teeth Whitening",
      info: "Looking to a brighter & whiter smile? At SoBeautiful&Co pearly whites are achieveable within minutes!",
      id: "teethWhyt",
      type: [
         {
            name: "Cosmetic Whitening",
            price: 100.00,
            duration: "1hr",
            class: "teeth1"
         }
      ]
   }, {
      service: "Make Up",
      info: "Makeup only available mobile",
      id: "makeUpz",
      type: [
         {
            name: "Full Glam",
            price: 85.00,
            duration: "2hrs",
            class: "makeup1"
         }, {
            name: "Natural",
            price: 65.00,
            duration: "1hr 30mins",
            class: "makeup1"
         }
      ]
   }
]


app.getServices = () => {
   console.log(app.services[0].type[0].name)
   app.services.map((stuff) => {
      console.log(stuff)
      $('.allServices').append(`
         <div class="serviceContainer ${stuff.id}"> 
            <h3>${stuff.service}</h3>
            <p class="serviceInfo">${stuff.info}</p>
            <div class="productType">
               ${stuff.type.map((moreStuff)=>{
                  // console.log(moreStuff)
                  return(`
                     <div class="individualProduct ${moreStuff.class}">
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
   $('.thing').slick({
      dots: true,
      // arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
   })
})