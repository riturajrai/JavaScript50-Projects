let Countel = document.querySelector(".count");
let load = document.querySelector(".loader")
let bpx = document.querySelector(".container")
let coun = 0
Update()

function Update(){
    Countel.innerText = coun + "%"
   coun++
   if(coun <102){
    setTimeout(Update,200)
   } else if( coun===102) {
    bpx.classList.add("show")
   }
   coun = coun < 10 ? "0" + coun:coun;

}