let Cart = document.querySelector(".iconCart-1");
let opencart = document.querySelector(".cart-of-page");
let container = document.querySelector(".cartWrapper");
let closecart = document.querySelector('.close-btn');

Cart.addEventListener('click',()=>{
    if(opencart.style.right == "-100%"){
        opencart.style.right ="0%"; 
        opencart.style.transition = "1s";
    }else{
        opencart.style.right = '0';
        
    }
})
closecart.addEventListener("click",function(){
     opencart.style.transition="1s" ;
    opencart.style.right="-100%"
    });
    //HMABURER ICON// 
let hamburger = document.querySelector('.burger');


//HAMBURGER OPENING FOR MOBLE//
let openhamburger = document.querySelector('.hamburger-container');
hamburger.addEventListener('click',function(){
     openhamburger.style.right = '30%' ;
     openhamburger.style.transition = '1s'
})
 
let closehamburger = document.querySelector('.hamburger-close-icon');
closehamburger.addEventListener('click',function(){
  openhamburger.style.right = '100%';
  openhamburger.style.transition = '1s'
})
//HAmBURGER CLOSING FOIR SLECTING A ITEM//
let hamburgerwork = document.querySelector("#hamburgerwork");
hamburgerwork.addEventListener('click',function(){
     openhamburger.style.right=  '100%';
})
let custombeats = document.querySelector('#custombeatsorder');
custombeats.addEventListener('click',function(){
  openhamburger.style.right=  '100%';
})
//SCROLLING FUNCTION ON CLICKING PAGE LINKS//
function scrollToSection() {
  // Get the target section
  var targetSection = document.querySelector('.cards');

  // Scroll to the target section
  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
//SOLID-BUTTON TO GET TO INSTAGRAM PAGE//
function redirectToUrl() {
  // Specifying instagram URL//
  var url = "https://www.instagram.com/kafil_qurashie76/"; // Replace this with your desired URL

  // Navigate to the instgram URL OR APP
  window.open(url,'_blank');
}
 /*  //SEARCH FUNTIONALITY//
document.getElementById("search-icon").addEventListener("click", function() {
    document.getElementById("search-popup").style.display = "block";
});
 
function search() {
    var input, filter, cards, title, i;
    input = document.getElementById('search-input').value.toUpperCase();
    cards = document.querySelectorAll('.card');

    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector('h3').textContent.toUpperCase();
        if (title.includes(input)) {
            highlightSearchResult(cards[i].querySelector('h3'), input);
        } else {
            removeHighlight(cards[i].querySelector('h3'));
        }
    }
}

function highlightSearchResult(element, filter) {
    var regex = new RegExp(filter, 'gi');
    element.innerHTML = element.textContent.replace(regex, function(match) {
        return '<span class="search-result">' + match + '</span>';
    });
}

function removeHighlight(element) {
    element.innerHTML = element.textContent;
}*/

// Define your list of cards
// Function to add item to cart (you can implement this according to your needs)

   /* fetch('../Leonardo/products.json')
    .then(response => response.json())
    .then(data => {
      // Iterating over each item in the data array and create a card
      data.forEach(item => {
        createCard(item);
      });
    })
    .catch(error => console.error('Error fetching data:', error));*/

    

// Function to add product to cart
// Function to add product to cart


// Function to update the quantity displayed in the .quantity element
   //checkingproduct//
// Function to update the shopping cart icon's quantity and set/update the cookie


//for JSON PRODUCTS//
// Get all the variant buttons
const variantButtons = document.querySelectorAll('.card2 .variants button');

// Add event listeners to each variant button
variantButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'selected' class from all variant buttons
    variantButtons.forEach(unselectedButton => {
      unselectedButton.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
  });
});
//ADDTOCART//
// Function to update the selected variant price
// Function to update the selected variant price

// Function to update the selected variant price
// Function to update the selected variant price
 // Variable to track if a variant is selected
// Initialize the variable outside the functions
let selectedVariant = 'MP3'; // Default selected variant
let selectedVariantPrice = 49.00; // Default price for MP3

 
// function updatePriceAndSave(variant, price, CardNumber,cardId,productId) {
//   const Price = document.querySelector(`.card${CardNumber} .price .Price`);
  
//   const savedStyle = localStorage.getItem(`priceStyle_${CardNumber}`);

//   const priceData = JSON.parse(localStorage.getItem('products')); // Assuming you've stored the JSON data in localStorage


//   // Update price
//   Price.textContent = `$${price.toFixed(2)}`;
  
//         // Enable the "Add to Cart" butto
//         //document.getElementById('addToCartButton8').disabled = false;
//   // Apply saved CSS properties

//   if (savedStyle) {

//       Price.setAttribute('style', savedStyle);
//   // Save updated price and CSS properties to localStorage

//   localStorage.setItem(`price_${CardNumber}`, Price.textContent);

//   localStorage.setItem(`priceStyle_${CardNumber}`, Price.getAttribute('style'));

// // Set the isVariantSelected variable to true
//  // Set licenses to true indicating the function is executed

//  // Set the flag to true indicating the function has been executed at least once
//  isUpdatePriceAndSaveCalled = true;
// enableaddtocart()
// }}

// Function to check if a variant is selected when the page loads
function checkVariantSelectedOnLoad(cardNumber) {
  const selectedVariant = localStorage.getItem(`selectedVariant_${cardNumber}`);
  if (!selectedVariant) {
      // Variant is not selected
      return false;
  } else {
      // Variant is selected
      return true;
  }
}
//HOLY IMPORTANT//
function initializeCards() {
  // Define the number of cards
  const numCards = 50; // Update the number if you have more or fewer cards
  
  // Loop through each card
  for (let i = 1; i <= numCards; i++) {
    // Call updatePriceAndSave for each card
    updatePriceAndSave('MP3', 49.00, i, `addToCartButton${i}`, 'productId'); // Update the parameters as needed
  }
}

// Call the initialization function when the page loads
window.onload = function() {
  initializeCards();
};

let products =[];
let   isUpdatePriceAndSaveCalled = false
//NEW UPDATE PRICE AND SAVE//
function updatePriceAndSave(variant, price, CardNumber, cardId, productId) {
  const Price = document.querySelector(`.card${CardNumber} .price .Price`);
  const savedStyle = localStorage.getItem(`priceStyle_${CardNumber}`);
  const priceData = JSON.parse(localStorage.getItem('products')); // Assuming you've stored the JSON data in localStorage
   // Select the price element
   const priceElement = document.querySelector(`.card${CardNumber} .price .Price`);
  
   // Update the displayed price
   priceElement.textContent = `$${price.toFixed(2)}`;
  // Update price
  Price.textContent = `$${price.toFixed(2)}`;

  // Set default price and variant to MP3 if no variant is selected
  if (!localStorage.getItem(`price_${CardNumber}`)) {
      localStorage.setItem(`price_${CardNumber}`, price.toFixed(2));
      localStorage.setItem(`selectedVariant_${CardNumber}`, 'MP3');
  }

  // Check if a variant is selected
  const selectedVariant = localStorage.getItem(`selectedVariant_${CardNumber}`);
  if (!selectedVariant) {
      // No variant selected, set default to MP3
      localStorage.setItem(`selectedVariant_${CardNumber}`, 'MP3');
  }

  // Enable the "Add to Cart" button if a variant is selected
      // Enable the "Add to Cart" button if the function has been called at least once
      
  // Apply saved CSS properties
  if (savedStyle) {
      Price.setAttribute('style', savedStyle);
  }

  // Save updated price and CSS properties to localStorage
  localStorage.setItem(`price_${CardNumber}`, Price.textContent);
  localStorage.setItem(`priceStyle_${CardNumber}`, Price.getAttribute('style'));

  // Set the isVariantSelected variable to true
  // Set licenses to true indicating the function is executed
  // Set the flag to true indicating the function has been executed at least once
  isUpdatePriceAndSaveCalled = true;
 
  // Enable the "Add to Cart" button
  // const addToCartButton = document.getElementById(cardId);
  // addToCartButton.removeAttribute('disabled');
}

//NEW UPDATE END//
// function enableaddtocart(){
//   let buttonvalue = document.getElementById('addToCartButton2');
//   buttonvalue.style.display = 'none'
// }

 //Function to check if a variant is selected when page loads
 //Function to enable the "Add to Cart" button for a specific card
let cart = [];
// Function to add product to cart with selected variant price
function addToCartWithSelectedVariantPrice(title, imgSrc, cardNumber, variant,productId) {
 const price = parseFloat(document.querySelector(`.card${cardNumber} .price .Price`).textContent.replace('$', ''));
 const selectedVariant = localStorage.getItem(`selectedVariant_${cardNumber}`);
 let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Check if a variant is selected
  // Check if updatePriceAndSave has been called
  if (!isUpdatePriceAndSaveCalled) {
    // If updatePriceAndSave has not been called, stop the function
    console.error("updatePriceAndSave must be called first.");
    return;
}
  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex(item => item.title === title && item.variant === variant);
  if (existingProductIndex !== -1) {
    // If the product already exists, update its quantity
    cart[existingProductIndex].quantity++,
    alert("BEAT HAS ALREADY BEEN ADDED TO CART WITH SPECIFIED LICENSE")
    
    
  } else {
    // If the product is not in the cart, add it
    cart.push({ title, price, imgSrc, variant, quantity: 1 });
    window.alert(`Beat "${title}" added to the cart.`);
    localStorage.setItem('cart', JSON.stringify(cart));
   
    
  
  }
  updateCartUI();
  openCart();
  
}

/*function addToCart(title,price,imgSrc,variant ) {
    const product = { title,price,imgSrc,variant};
    // Get the existing cart data from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if the product is already in the cart 
   
    const existingProductIndex = cart.findIndex(item => item.title === product.title);
  
  if (existingProductIndex !== -1) {
    // If the product already exists, update its quantity
    cart[existingProductIndex].quantity++,alert("Product Already in Cart!");
   
  }
   else{
    // If the product is not in the cart, add it
    cart.push({ ...product, quantity: 1 });
  
    alert("Product added to Cart successfully")
  
  
 
  }

 // Reset variantSelected to false after adding the product to the cart

  
  updateCartUI();  

    // Update the UI to display the newly added product in the shopping cart
    
    //open the cart ach time i add the product

    openCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}


    // Show the updated quantity of products in the cart
    // Save the updated cart data back to localStorage
 
// Event listener for variant buttons
// Loop through each card and attach event listeners to variant buttons
// Loop through each card and attach event listeners to variant buttons





///VARNAT PRICE UPADAT//./
// Function to update the price and save to localStorage
// Function to handle variant button click


// Loop through each card and attach event listeners to variant buttons
/*for (let i = 1; i <= cardCount; i++) {
  const MP3 = document.getElementById(`MP3-${i}`);
  const WAV = document.getElementById(`WAV-${i}`);
  const PREMIUM = document.getElementById(`PREMIUM-${i}`);
  const UNLIMITED = document.getElementById(`UNLIMITED-${i}`);

  // Add event listeners to variant buttons in each card
  MP3.addEventListener('click', function() {
      handleButtonClick('MP3', '$49.00', i);
  });
  
  WAV.addEventListener('click', function() {
      handleButtonClick('WAV', '$79.00', i);
  });
  
  PREMIUM.addEventListener('click', function() {
      handleButtonClick('PREMIUM', '$129.00', i);
  });
  
  UNLIMITED.addEventListener('click', function() {
      handleButtonClick('UNLIMITED', '$149.00', i);
  });
}*/





  function openCart() {
    const opencart = document.querySelector(".cart-of-page");
    if (opencart.style.right == "-100%") {
        opencart.style.right = "0%";
        opencart.style.transition = "0.5s";
    } else {
        opencart.style.right = '0';
    }
}


  // Call updateCartUI when the page loads to populate the cart from localStorage

    // Function to remove product from cart
    function removeFromCart(title) {
        // Get the existing cart data from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Find the index of the product to be removed
        const indexToRemove = cart.findIndex(item => item.title === title);

        // If the product is found, remove it from the cart
        if (indexToRemove !== -1) {
            cart.splice(indexToRemove, 1);
        }

        // Save the updated cart data back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the UI to reflect the changes
        updateCartUI();
    }

// Function to show cart products and update cart quantity

    
  //REMOVE//
// Function to remove product from cart
// Function to update the shopping cart UI
function updateCartUI() {
  // Get the cart data from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Get the list of cart items element
  const cartList = document.querySelector('.listCart');

  // Clear the existing cart items
  cartList.innerHTML = '';

  // Initialize total price
  let totalPrice = 0;

 isVariantSelected =true
/* if (Price == "From $49.00"){
  alert("please slect a variant before procedding")
  return  addToCartWithSelectedVariantPrice(title, imgSrc, cardNumber, variant,cardId)
}else{
  addToCartWithSelectedVariantPrice(title, imgSrc, cardNumber, variant,cardId)
}*/
 
  // Iterate over each product in the cart
  cart.forEach(product => {
      // Check if the product has a title, imgSrc, and price
      if (product.title && product.imgSrc && product.price && isVariantSelected) {
          // Create elements to represent the product in the shopping cart
          const cartItem = document.createElement('div');
          cartItem.classList.add('item');
          cartItem.style.borderRadius = '15px';

          const imageDiv = document.createElement('div');
          imageDiv.classList.add('image-1');
          const image = document.createElement('img');
          image.src = product.imgSrc;
          // Set the alt text
          imageDiv.appendChild(image);

          // Image of product in cart styling
          image.style.width = '70px';
          image.style.marginInleft = "20px"
          image.style.height = '70px';
          image.style.objectFit = 'cover';

          const nameDiv = document.createElement('div');
          nameDiv.classList.add('name');
          nameDiv.textContent = product.title;

          nameDiv.style.marginRight="20px";

          const priceDiv = document.createElement('div');
          priceDiv.classList.add('totalPrice');
          priceDiv.textContent = '$' + product.price;

          // Update total price
          totalPrice += product.price * 1;

          //remove//
          const removeButton = document.createElement('button');
          removeButton.classList.add('remove-btn');
          removeButton.textContent = 'Remove';
          removeButton.addEventListener('click', () => {
              removeFromCart(product.title);
          });

          removeButton.style.color ='#000';
          removeButton.style.fontFamily='Arial, sans-serif';
          removeButton.style.backgroundcolor = 'black';
          removeButton.style.marginLeft='30%';
          removeButton.style.height='30px';
          removeButton.style.marginTop='25px';
          removeButton.style.transition=`1s`
          removeButton.style.borderRadius='12px'
          removeButton.style.transform ='translateX(-20px)'

          //BUTTONC STYLING/
          cartItem.appendChild(imageDiv);
          cartItem.appendChild(nameDiv);
          cartItem.appendChild(priceDiv)
          cartItem.appendChild(removeButton);

          // Append the cart item to the list of cart items
          cartList.appendChild(cartItem);
      }
  });

  // Update total checkout amount
  const totalPriceElement = document.getElementById('total_price');
  if (totalPriceElement) {
      totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
  } else {
      console.error('Total price element not found');
  }
}

   



 // Call updateCartUI when the page loads to populate the cart from localStorage
 updateCartUI();


/*let variantId = document.querySelector(`.varinats `).dataset.variant;
console.log(`Variant ID: ${variantId}`);

     // Event delegation for "Add to Cart" buttons
     document.addEventListener('click', function(event) {
      if (event.target && event.target.classList.contains('solid-btn-1')) {
          const card = event.target.closest('.card');
          const title = card.querySelector('h3').textContent;
          const price = parseFloat(card.querySelector('.Price').textContent.replace('$', ''));
          const imgSrc = card.querySelector('img').src;
          const pricecart = parseFloat(card.querySelector('.Price').textContent.replace('$', '')); // Assuming the pricecart is the same as price for now
          addToCart(title, price, imgSrc, pricecart, variantId);
      }
  });
// Function to handle click on "Add to Cart" buttons
// Function to handle click on "Add to Cart" buttons
function handleAddToCartClick(event) {
  const target = event.target;
  if (target && target.classList.contains('solid-btn-1')) {
      const card = target.closest('.card');
      const titleElem = card.querySelector('h3');
      const title = titleElem ? titleElem.textContent : "";
      const priceElem = card.querySelector('.price .Price');
      const price = priceElem ? parseFloat(priceElem.textContent.replace('$', '')) : 0;
      const imgElem = card.querySelector('img');
      const imgSrc = imgElem ? imgElem.src : "";
      const cardId = target.dataset.cardId; // Adding this line to retrieve the card ID
      if (title && price !== 0 && imgSrc && cardId) {
          addToCartWithSelectedVariantPrice(title, price, imgSrc, cardId,variantId);
      } else {
          console.error("Failed to extract necessary data from the card.");
      }
  }
}
function updatePriceAndSavejson(variant, price, variantId) {
  const Price = document.querySelector(`.variants-${variantId} .price .Price`);
  const savedStyle = localStorage.getItem(`priceStyle_${variantId}`);
  
  // Update price
  Price.textContent = `$${price.toFixed(2)}`;
  
  // Apply saved CSS properties
  if (savedStyle) {
      Price.setAttribute('style', savedStyle);
  }
  // Save updated price and CSS properties to localStorage
  localStorage.setItem(`price_${variantId}`, Price.textContent);
  localStorage.setItem(`priceStyle_${variantId}`, Price.getAttribute('style'));
}

function addToCartWithSelectedVariantPricejson(title, imgSrc, variantId) {
  const price = parseFloat(document.querySelector(`.variants-${variantId} .price .Price`).textContent.replace('$', ''));
  addToCart(title, price, imgSrc, variantId);
}
function addToCartjson(title, price, imgSrc, variantId) {
  const product = { title, price, imgSrc, variantId };
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProductIndex = cart.findIndex(item => item.title === product.title && item.variantId === product.variantId);

  if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity++;
      alert("Product Already in Cart!");
  } else {
      cart.push(product);
      alert("Product added to Cart successfully");
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  openCart();
}


const data = [
  {
      id: 1,
      imgSrc: '../Leonardo/alchemyrefiner_alchemymagic_0_1650712e-61cc-43d6-a84b-85d42cdc0a19_0.jpg',
      audioSrc: '../FriendshipsOriginalMixnextedit.wav.wav',
      title: 'Rock',
      producer: 'Kafil Qurashie',
      MP3: [49.00],
      WAV: 79.00,
      PREMIUM: [129.00],
      UNLIMITED: [149.00],
      price: 'From $49.00'
  },
];

//CREATE CARD//
/*function createCard(data) {
    // Create a new card element
    const newCard = document.createElement("div");
    newCard.classList.add("card12");
    newCard.classList.add("card13");
    
    // Populate the new card element with data
    newCard.innerHTML = `
    <img src="${data.imgSrc}" alt="">
    <span>KAFIL MUSIC</span>
    <audio controls>
        <source src="${data.audioSrc}">
    </audio>
    <h3>${data.title}</h3>
    <p>Producer-${data.producer}</p>
    <div class="variants">
        <button id="MP3-${data.id}" onclick="updatePriceAndSave('MP3', ${data.MP3}, ${data.id})">MP3</button>
        <button id="WAV-${data.id}" onclick="updatePriceAndSave('WAV', ${data.WAV}, ${data.id})">WAV</button>
        <button id="PREMIUM-${data.id}" onclick="updatePriceAndSave('PREMIUM', ${data.PREMIUM}, ${data.id})">PREMIUM</button>
        <button id="UNLIMITED-${data.id}" onclick="updatePriceAndSave('UNLIMITED', ${data.UNLIMITED}, ${data.id})">UNLIMITED</button>
    </div>
    <div class="price">
        <h4 class="Price">${data.price}</h4>
    </div>
    <button class="solid-btn-1" id="addToCartBtn" onclick="addToCartWithSelectedVariant('${data.title}', '${data.imgSrc}', '${data.id}');">Add to Cart</button>
    <button class="solid-btn" onclick="addToCart("${data.title}, ${data.imgSrc}, ${data.pricecart}")">Check License</button>
    `;
  
    
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.appendChild(newCard);
}

// Call the function to add the cards to the DOM
addCardsToDOM(data);


  const addToCartbtn = document.getElementById("addToCartBtn");

  addToCartbtn.addEventListener("click", () => {

      // Calling the addToCartdata function with the correct parameters ofJSON//
      addToCartWithSelectedVariantPrice(data.title,data.imgSrc,data.id);

  });

// Call updateCartUI when the page loads to populate the cart from localStorage
window.addEventListener('load', updateCartUI);


// Call updateCartUI when the page loads to populate the cart from localStorage
window.addEventListener('load', () => {
    updateCartUI();
   
    
   
  
});

  /*let MP3 = document.getElementById('MP3-1');
  let WAV = document.getElementById('WAV-1');
  let PREMIUM = document.getElementById('PREMIUM-1');
  let UNLIMITED = document.getElementById('UNLIMITED-1');

  let Price = document.querySelector('.price');
  // Get the value of the CSS variable
  const variantButtons = document.querySelectorAll('.variants-1 button');
    // Load the selected variant from localStorage
    const selectedVariant = localStorage.getItem('selectedVariant');

      // Load saved settings from localStorage
      const savedPrice = localStorage.getItem('price');
      const savedStyle = localStorage.getItem('priceStyle'); // Use the same key for saving and retrieving CSS properties
      
  
      // Apply saved settings
      if (savedPrice) {
        Price.textContent = savedPrice;
    }

      // Apply saved CSS properties
      if (savedStyle) {
        Price.setAttribute('style', savedStyle);
    }

     // Extract price from the selected variant button's text and add it to the cart
     const priceText = button.textContent.trim().split('\n')[1]; // Extract the price text
     const price = parseFloat(priceText.replace('$', '')); // Remove '$' sign and convert to number
     addToCart(price);


    Price.style.fontSize = '30px';
    Price.style.bottom = '48%';
    Price.style.fontFamil ="monospace";
    Price.style.position = 'relative';
    Price.style.bottom = '35px';
    Price.style.textAlign = 'center';
    Price.style.fontSize = '35px';
    Price.style.marginTop = '0';
    Price.style.paddingTop = '0';
    Price.style.height = '10px';
    Price.style.marginBottom = '70px';
    

  MP3.addEventListener('click',function(){
      Price.textContent="$49.00";
      Price.style.fontSize = '35px';
      Price.style.bottom = '48%';
      Price.style.fontFamil ="monospace";
      Price.style.position = 'relative';
      Price.style.bottom = '35px';
      Price.style.textAlign = 'center';
      Price.style.fontSize = '35px';
      Price.style.marginTop = '0';
      Price.style.paddingTop = '0';
      Price.style.height = '10px';
      Price.style.marginBottom = '70px';
      savePriceAndStyle(); // Save updated price and CSS properties

        
       
/*
  })
   // Save updated settings to localStorage
   localStorage.setItem('price', Price.textContent);
   localStorage.setItem('priceStyle', Price.getAttribute('style')); // Use the same key for saving CSS properties

  WAV.addEventListener('click', function () {
      Price.textContent = ' $79.00'; // Update price for WAV
      Price.style.fontSize = '30px';
      Price.style.bottom = '48%';
      Price.style.fontFamil ="monospace";
      Price.style.position = 'relative';
      Price.style.bottom = '35px';
      Price.style.textAlign = 'center';
      Price.style.fontSize = '35px';
      Price.style.marginTop = '0';
      Price.style.paddingTop = '0';
      Price.style.height = '10px';
      Price.style.marginBottom = '70px';
      savePriceAndStyle(); // Save updated price and CSS properties
  });

  PREMIUM.addEventListener('click', function() {
      Price.textContent = ' $129.00'; // Update price for PREMIUM
      Price.style.fontSize = '30px';
      Price.style.bottom = '48%';
      Price.style.fontFamil ="monospace";
      Price.style.position = 'relative';
      Price.style.bottom = '35px';
      Price.style.textAlign = 'center';
      Price.style.fontSize = '35px';
      Price.style.marginTop = '0';
      Price.style.paddingTop = '0';
      Price.style.height = '10px';
      Price.style.marginBottom = '70px';
      savePriceAndStyle(); // Save updated price and CSS properties
  });

  UNLIMITED.addEventListener('click', function() {
      Price.textContent = ' $149.00'; // Update price for UNLIMITED
      Price.style.fontSize = '30px';
      Price.style.bottom = '48%';
      Price.style.fontFamil ="monospace";
      Price.style.position = 'relative';
      Price.style.bottom = '35px';
      Price.style.textAlign = 'center';
      Price.style.fontSize = '35px';
      Price.style.marginTop = '0';
      Price.style.paddingTop = '0';
      Price.style.height = '10px';
      Price.style.marginBottom = '70px';
      savePriceAndStyle(); // Save updated price and CSS properties
  });
// Function to save updated price and CSS properties to localStorage
function savePriceAndStyle() {
  localStorage.setItem('price', Price.textContent);
  localStorage.setItem('priceStyle', Price.getAttribute('style'));
}*/

/*
// Function to update price and save to localStorage
function updatePriceAndSave(variant, price, cardNumber) {
  const Price = document.querySelector(`.card${cardNumber} .price .Price`);
  const savedStyle = localStorage.getItem(`priceStyle_${cardNumber}`);
  
  // Update price
  Price.textContent = price;
  
  // Apply saved CSS properties
  if (savedStyle) {
      Price.setAttribute('style', savedStyle);
  }
  
  // Save updated price and CSS properties to localStorage
  localStorage.setItem(`price_${cardNumber}`, price);
  localStorage.setItem(`priceStyle_${cardNumber}`, Price.getAttribute('style'));
}

// Function to handle button clicks
function handleButtonClick(variant, price, cardNumber) {
  updatePriceAndSave(variant, price, cardNumber);
}*/
//FORM VALIDATION//
document.getElementById('myForm').addEventListener('submit', function(event) {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var isValid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
      setErrorFor(nameInput, 'Name cannot be blank');
      isValid = false;
  } else {
      setSuccessFor(nameInput);
  }

  // Email validation
  if (emailInput.value.trim() === '') {
      setErrorFor(emailInput, 'Email cannot be blank');
      isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
      setErrorFor(emailInput, 'Invalid email address');
      isValid = false;
  } else {
      setSuccessFor(emailInput);
  }

  // Prevent the form from submitting if validation fails
  if (!isValid) {
      event.preventDefault();
  } else {
      showConfirmationMessage();
  }
});

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var errorMessage = formControl.querySelector('.error-message');
  if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.classList.add('error-message');
      formControl.appendChild(errorMessage);
  }
  errorMessage.innerText = message;
  formControl.classList.add('error');
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.classList.remove('error');
  var errorMessage = formControl.querySelector('.error-message');
  if (errorMessage) {
      formControl.removeChild(errorMessage);
  }
}

function isValidEmail(email) {
  // Regular expression for validating email addresses
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showConfirmationMessage() {
  var confirmationDiv = document.getElementById('confirmation');
  confirmationDiv.style.display = 'block';
}