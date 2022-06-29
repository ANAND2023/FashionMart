var toggler =document.getElementById("toggler")
var left =document.getElementById("left")
var right =document.getElementById("right")

toggler.addEventListener("click",()=>{
    left.classList.toggle("hide")
   right.classList.toggle("hide")
})