let number = 0
const incrementButton = document.querySelector(".increment")
const decrementButton = document.querySelector(".decrement")
const addToCartButton = document.querySelector(".addToCart")
const incrementDivPara = document.querySelector(".incrementDivPara")
const shopIcon = document.querySelector(".shop-icon")
const cartDisplay = document.querySelector(".cartDisplay")
const nextButton = document.querySelector(".carousel-item-next")
const prevButton = document.querySelector(".carousel-item-prev")
const slides = document.getElementsByClassName("carousel-item")
const thumbnailImage = document.querySelectorAll(".thumbnailImage")

const totalSlides = slides.length

let slidePosition = 0

let displayCart = false

let num1 = 125



incrementButton.addEventListener("click", increase)

decrementButton.addEventListener("click", decrease)

addToCartButton.addEventListener("click", addToCart)

shopIcon.addEventListener("click",displayCartHandler )



function increase() {
    number += 1
    incrementDivPara.innerText = number
    decrementButton.disabled = false
    addToCartButton.disabled = false
}

function decrease() {

    if (number > 0) {
    
        number -= 1
        incrementDivPara.innerText = number
    }
}

function addToCart() {
    cartDisplay.innerHTML = `
        <h4 class="checkout-title">Cart</h4>
        <hr class="checkout-hr">
        
        <div class="checkout-first-div">
            <img src="./images/image-product-1-thumbnail.jpg" alt="">
            <p>Fall Limited Edition Sneakers $125.00 x ${incrementDivPara.innerHTML} 
            <span>$${num1 * incrementDivPara.innerHTML}.00</span>
            </p>
        </div>

        <div class="checkout-second-div">
            <button class="addToCart">Checkout</button>
        </div>
    `
    number = 0
    incrementDivPara.innerHTML = number
}

function displayCartHandler() {

    displayCart = !displayCart

    if (displayCart) {
        cartDisplay.style.display = "block"
    }

    else {
        cartDisplay.style.display = "none"
    }
}


/*shopIcon.addEventListener("click", () => {

    displayCart = !displayCart

    if (displayCart) {
        cartDisplay.style.display = "block"
    }

    else {
        cartDisplay.style.display = "none"
    }

    console.log(cartDisplay.style.display)

})*/


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');

    }

    for (let images of thumbnailImage) {
        images.classList.remove("thumbnail-images-active")
    }
}

function moveToNextSlide() {
    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    }
    else {
        slidePosition += 1
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    thumbnailImage[slidePosition].classList.add("thumbnail-images-active")
}

function moveToPrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    }
    else {
        slidePosition -= 1
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    thumbnailImage[slidePosition].classList.add("thumbnail-images-active")
}

setInterval(() => {
    return (
        moveToNextSlide()
    )
}, 4000)

prevButton.addEventListener("click", moveToPrevSlide)
nextButton.addEventListener("click", moveToNextSlide)


openHamburgerMenu.addEventListener("click", () => {
    openMenuDiv.style.display = "none"
    hamburgerLinks.style.display = "flex"
})