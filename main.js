import './style.css'

let header_text = document.querySelector(".header-text")
let header_img = document.querySelector(".header-img")

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let translate = value * 0.9
    if (translate > 500) {
        translate = 500
    }
    let scale = 1 + value * 0.0002
    if (scale < 1) {
        scale = 1
    }
    if (scale > 1.1) {
        scale = 1.1
    }
    let opacity = 300 / value -1
    if (opacity < 0) {
        opacity = 0
    }
    if (opacity > 1) {
        opacity = 1
    }
    console.log(value)
    header_img.style.transform = "translateY(" + translate + "px)" + " scale(" + scale + ")"
    header_text.style.transform = "scale(" + scale + ")"

    header_img.style.opacity = opacity
    header_text.style.opacity = opacity
})