
const input = document.getElementById("input");
const button = document.getElementById("submit")
var image = document.getElementById("image");

//you can type in the console 
//image.src
//and you with get the source of the image


//button gets given a listener and when it gets clicked
//the below begins to work
button.addEventListener("click", function(){
    image.src = input.value;
})