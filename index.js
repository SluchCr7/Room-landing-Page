let DetailObject = [
    {
        id: 1,
        "img": "images/desktop-image-hero-1.jpg",
        "title": "Discover innovative ways to decorate",
        "paragraph": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },   
    {
        id: 2,
        "img": "images/desktop-image-hero-2.jpg",
        "title": "We are available all across the globe",
        "paragraph": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        id: 3,
        "img": "images/desktop-image-hero-3.jpg",
        "title": "Manufactured with the best materials",
        "paragraph": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

let content = document.getElementById('content')

let textHeading = document.querySelector(".image_right h1")
let textParagraph = document.querySelector(".image_right p")

// let arrowLeft = document.getElementById('arrowLeft')
// let arrowRight = document.getElementById('arrowRight')
let img = document.getElementById('img')
let NavLinks = document.querySelector(".nav_links")
let close = document.getElementById('close')
let menu = document.getElementById('menu')
close.addEventListener('click', () => {
    NavLinks.style.display = "none"
})
menu.addEventListener('click', () => {  
    NavLinks.style.display = "flex"
})
let arrowLeft = document.querySelectorAll('.arrowLeft')
let arrowRight = document.querySelectorAll('.arrowRight')
let i = 0
arrowLeft.forEach((ele) => {
    ele.addEventListener("click", () => {
        if(i > 0){
            i--
            img.src = DetailObject[i].img   
            textHeading.innerHTML = DetailObject[i].title
            textParagraph.innerHTML = DetailObject[i].paragraph
        }
        else{
            i = 2
            img.src = DetailObject[i].img
            textHeading.innerHTML = DetailObject[i].title
            textParagraph.innerHTML = DetailObject[i].paragraph
        }
    })
})

arrowRight.forEach((ele) => {   
    ele.addEventListener("click", () => {
        if (i < 2) {
            i++
            img.src = DetailObject[i].img
            textHeading.innerHTML = DetailObject[i].title   
            textParagraph.innerHTML = DetailObject[i].paragraph
        }
        else {  
            i = 0
            img.src = DetailObject[i].img
            textHeading.innerHTML = DetailObject[i].title
            textParagraph.innerHTML = DetailObject[i].paragraph
        }
    })
})