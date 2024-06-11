const images = document.querySelectorAll(".image-select a")
const imageButtons = [...images]
let imageId = 1

imageButtons.forEach((imageItem) => {
    imageItem.addEventListener("click", (event) => {
        event.preventDefault()
        imageId = imageItem.dataset.id
        slideImage()
    })
})

function slideImage() {
    const displayWidth = document.querySelector(
        ".image-showcase img",
    ).clientWidth

    document.querySelector(".image-showcase").style.transform = `translateX(${
        -(imageId - 1) * displayWidth
    }px)`
}
