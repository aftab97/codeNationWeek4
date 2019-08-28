
var placeHolder = document.getElementById("placeholder");
var input = document.getElementById("input");
var submit = document.getElementById("submit");
var list = document.getElementById("list");

// this changes the header to whichever string we submit
submit.addEventListener("click", function(){
    placeHolder.style.color="goldenrod";
    placeHolder.textContent=  input.value;

    //this changes the lists in the ul to the following we enter
    list.innerHTML = `<li>${input.value}</li>`;
    //if you dont add the <li> tags then you wont get what we 
    //enterd in the list format (no bullet point)
})