const slider = document.querySelector(".oneslider")
const contantEl = document.querySelectorAll(".content")
const right = document.querySelector("#next")
const left = document.querySelector("#prev")

let time;
let currentImage = 1;
imageSlider()
right.addEventListener("click",()=>{
    clearTimeout(time)
    currentImage++
    imageSlider()
})

left.addEventListener("click",()=>{
    clearTimeout(time)
    currentImage--
    imageSlider()
})



function imageSlider(){

if(currentImage > contantEl.length){
    currentImage = 1
} else if (currentImage < contantEl ){
    currentImage = contantEl.length
}

slider.style.transform = `translateX(-${(currentImage -1)*450}px)`
   time =setTimeout(()=>{
    currentImage++
    imageSlider()
},2000)

}
