// name spacing object 
const app = {};

// types of services array 
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
            class: "eyelash1",
            image: "classic.png",
            info: "Classic Eyelash Extensions are a one-to-one application. This is a method where one eyelash extension is glued onto one of your natural lashes. If you’re looking for a more natural look Classic Eyelash Extensions are the perfect set for you!"
         }, {
            name: "Hybrid Lash Extension",
            price: 100.00,
            duration: "2hrs",
            class: "eyelash2",
            image: "hybrid.png",
            info: "The Hybrid Eyelash Extensions is a technique that requires a combination of two different lash application. The Hybrid lashes consist of a mix of Classic lash application & Volume Application. This is the perfect set for you if you’re looking for a subtle fuller look that compliments your natural eyelashes."
         }, {
            name: "Volume Extensions",
            price: 120.00,
            duration: "2hr 30mins",
            class: "eyelash3",
            image: "volume.png",
            info: "Volume lashes are multiple thinner extensions attached to one natural lash. All fans are handmade during your service. How full your lashes will look, will depend on client’s natural lashes and desired outcome. If you’re looking for your eyes to pop, this is the ultimate go to glam set!"
            
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
            duration: "1hr 15mins",
            class: "refill1",
            image: "refill.png",
            info: "Refills are recommended every 2-4 weeks. Please remember to have 40% or more of your Eyelash Extensions to be left to be considered a refill. If anything is less, you will be charged for a Full Set"
         }, {
            name: "Hybrid Lash Extensions",
            price: 65.00,
            duration: "1hr 30mins",
            class: "refill2",
            image: "refill.png",
            info: " Refills are recommended every 2-4 weeks. Please remember to have 40% or more of your Eyelash Extensions to be left to be considered a refill. If anything is less, you will be charged for a full Set"
         }, {
            name: "Volume Lash Extensions",
            price: 75.00,
            duration: "1hr 45mins",
            class: "refill3",
            image: "refill.png",
            info: "Refills are recommended every 2-4 weeks. Please remember to have 40% or more of your Eyelash Extensions to be left to be considered a refill. If anything is less, you will be charged for a full Set"
         }
      ]
   }, {
      service: "Brow Lamination",
      info: "Fluffy Brows are a HOT trend. At SoBeautiful&Co we will be able to create a fluffy, brushed up brow look resulting in a more fuller, symmetrical brow that last approximately 6-8 weeks",
      id: "browLamz",
      type: [
         {
            name: "No Tint",
            price: 65.00,
            duration: "45mins",
            image: "BrowLam.jpg",
            class: "brow1",
            info: "Semi-permanent treatment that naturally lifts your brow hair to achieve a fuller and more uniform brow look. (Last 4-12 weeks)"
         }, {
            name: "With Tint",
            price: 80.00,
            duration: "1hr",
            image: "browTint.jpg",
            class: "brow2",
            info: "Semi permanent treatment that naturally lifts your brow hair to achieve a fuller and more uniform brow look. Tint can only be applied a week later to avoid overprocessing brow hairs. Tinting your brows provides a more uniform and shaper appearance. (Last 4-12 weeks) ",
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
            duration: "35mins",
            image: "tan.jpg",
            class: "spray1",
            info: "Choose from 4 shades Latte,Espresso,Moka & Hot Chocolate. (Lasts 2-3 weeks)"
         }, {
            name: "Extra Coat",
            price: 10.00,
            duration: "15mins",
            image: "tan.jpg",
            class: "spray2",
            info: "Additional Spray Tan coat"
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
            image: "teethWhitening.jpg",
            class: "teeth1",
            info: "Cosmetic Teeth Whitening is performed using LED blue light to activate the Hydrogen Peroxide gel that is applied gently to your teeth to get rid of those pesky stains and to achieve a brighter & white smile! All products used are approved by Health Canada. (Last 2-6 months depending on aftercare)"
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
            image: "glamMakeup.jpeg",
            class: "makeup1",
            info: "The Ultra Glam Makeup application focuses on creating a look that makes you POP.  If you’re looking for a more contoured & glowy skin look paired with a Smokey eye, this application is best suited for you!"
         }, {
            name: "Natural",
            price: 65.00,
            duration: "1hr 30mins",
            image: "naturalMakeup.jpeg",
            class: "makeup1",
            info: "What we like to call the “Barely Even There” Makeup application that focuses on enhancing your natural features. This type of application is best suited for minimal makeup looks"
         }
      ]
   }
]

// when called, map through the app.services array and append the specific data onto the DOM.

app.getServices = () => {
   app.services.map((stuff) => {
      $('.allServices').append(`
         <div class="serviceContainer ${stuff.id}"> 
            <h3 id="${stuff.id}">${stuff.service}</h3>
            <p class="serviceInfo">${stuff.info}</p>
            <div class="productType">
               ${stuff.type.map((moreStuff)=>{
                  return(`
                     <div class="individualProduct ${moreStuff.class}">
                        <p class="serviceName">${moreStuff.name}</p>
                        <div class="serviceImage">
                           <img src="../assets/${moreStuff.image}" alt="${moreStuff.name}">
                        </div>
                        <p class="serviceInfo">${moreStuff.info}</p>
                        <p>Price: $${moreStuff.price}.00</p>
                        <p>Duration: ${moreStuff.duration}</p>
                     </div>
                     `)
               }).join('')}
            </div>
               <a href="./contact.html"><button>Book Now</button></a>
               <div>
                  <a class="serviceBack" href="#serviceNav">Back to top <i class="far fa-caret-square-up"></i></a>
               </div>
         </div>
      `)
   })
}

// when button is clicked, sweet alert pops up on DOM containing information about product.

$('.productAlert1').on('click', function () {
   Swal.fire({
      title: 'SO Mulberry Silk Eyemask',
      text: 'The only type of PILLOWTALK you need. Made with 100% Mulberry Silk our eyemask provides benefits for both your hair and skin.This eyemask will help keep your skin smooth & moisturized while reducing the development of wrinkles and creases around your eyes. Most importantly silk goes hand in hand with both your lashes & lash extensions, it protects your lashes and helps them keep intact. We want to make sure your pretty little eyes get the love and protection it needs! And how can I forget our eyemasks block out the sun to help you get that beauty sleep YOU deserve!',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mxcabrera.github.io/soBeautifulCo/assets/logo.JPG',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.productAlert2').on('click', function () {
   Swal.fire({
      title: 'Natural hair growth serum',
      text: 'Lash + Brow by SO is a luscious serum that includes high quality natural ingriedients to help stimulate hair growth. This serum is a non drip formula that was designed to deep condition your lash & brow  hairs  while repairing your natual hair growth. Lash + Brow by SO serum helps promote longer and fuller lash & brow hair  all thanks to a combination of nourshing oils & natural ingriedients. This serum is to be used daily to receive best results! Directions: Apply once daily on Lash & Brow Hairs for best results. (You can apply twice if needed) Recommended to be applied right before bed.Please keep in mind Lash serum results take time.Ensure you are applying it daily for best results! Note, If using with lash extensions use a lip applicator wand and apply it on your upper lash line.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mxcabrera.github.io/soBeautifulCo/assets/logo.JPG',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.productAlert3').on('click', function () {
   Swal.fire({
      title: 'SO Body Scrub Ingredients',
      text: 'Shea butter, organic sugar, coconut oil, rice bran oil, apricot kernal oil, grapeseed oil, cocoa butter, emulsifying wax (plant-based thickener), coffee grinds, grape seed fruit extract(natural preservative)         ----------------------------------------------------------------------------------------------- Directions: Apply to body using small circular movements. Rinse off with warm water. Doubles as a moisturizer. Keep out of direct sunlight',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mxcabrera.github.io/soBeautifulCo/assets/logo.JPG',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

$('.morePDirection').on('click', function () {
   Swal.fire({
      title: 'Directions',
      text: 'Apply once daily on Lash & Brow Hairs for best results. (You can apply twice if needed) Recommended to be applied right before bed.Please keep in mind Lash serum results take time.Ensure you are applying it daily for best results! Note, If using with lash extensions use a lip applicator wand and apply it on your upper lash line.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mxcabrera.github.io/soBeautifulCo/assets/logo.JPG',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})
$('.morePIngredients').on('click', function () {
   Swal.fire({
      title: 'Ingredients',
      text: 'CERA ALBA,RICINUS COMMUNIS SEED OIL,CAMELLIA OLEIFERA SEED OIL,GLYCYRRHIZA GLABRA ROOT,HELIANTHUS ANNUS SEED OIL,ARGANIA SPINOSA KERNEL OIL,URTICA DIOICA LEAF EXTRACT,DL-ALPHA TOCOPHEROL,CITRUS AURANTIUM DULCIS,GLYCERYL MONOCAPRYLATE (AND) GLYCERYL MONOUNDECYLENATE (NATURAL PRESERVATIVE). -----------------------------------------------------------------------------------------------Silicone Free / Pregnancy Safe / Cruelty Free / Natural Ingreidients ----------------------------------------------------------------------------------------------- As it is rare to see a reaction to our products, it is advised a skin patch allergy test is suggested. Please place a small piece of product on skin. If irritation occurs discontinue product.',
      // icon: 'info',
      confirmButtonText: 'Exit',
      animation: false,
      imageUrl: 'https://mxcabrera.github.io/soBeautifulCo/assets/logo.JPG',
      imageWidth: 200,
      imageHeight: 200,
      // background: '#fff url(https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg)'
   })
})

// connecting Hamburger menu to the javascript file.

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// When hamburger menu is clicked, toggle the open menu box.
// Show each link transitionally one after the other.

hamburger.addEventListener('click', ()=> {
   navLinks.classList.toggle('open');
   links.forEach(link => {
      link.classList.toggle('fade');
   })
})

// document ready function.

$(function(){
   app.getServices()
   $('.thing').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      pauseOnHover: true,
      pauseOnFocus: true,
   })
})