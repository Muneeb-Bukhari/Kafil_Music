let Cart = document.querySelector(".cart-div");
let opencart = document.querySelector(".cart-of-page");
let container = document.querySelector(".cartWrapper");
let closecart = document.querySelector(".closecart");

Cart.addEventListener('click',()=>{
    if(opencart.style.right == "-100%"){
        opencart.style.right ="0%";   
    }else{
        opencart.style.right = '0';
        container.style.transform = 'translateX(0)';
    }
})

closecart.addEventListener('click',()=>{
    opencart.style.right="-100%"  ; 

});
