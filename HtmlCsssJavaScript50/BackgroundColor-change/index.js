let btn = document.querySelector(".btn")
let show = document.querySelector(".code")
function BackGroundColor(){
let myHexaValue = "0123456789abcdef";
let color = "#"
for(let i=0; i<6; i++){
  color = color + myHexaValue[Math.floor(Math.random()*16)]
}
document.body.style.backgroundColor = `${color}`
show.innerHTML = color
}
btn.addEventListener("click", ()=>{
    BackGroundColor()
})
