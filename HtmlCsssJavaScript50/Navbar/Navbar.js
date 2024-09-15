let hidebtn = document.getElementById("hide")
let ShowBtn = document.getElementById("btn")
let NavContainer = document.querySelector(".nav-container")

ShowBtn.addEventListener("click",()=>{
    NavContainer.classList.toggle("SHOW")
})
hidebtn.addEventListener("click",()=>{
    NavContainer.classList.remove("SHOW")
})