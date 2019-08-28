const image = document.getElementById("cat");

var submitButton = document.getElementById("submit");

submitButton.addEventListener("click",function(){
    if (image.style.display == "none"){

        //image "block" makes the image reappear
        image.style.display = "block";
        submitButton.textContent = "hide";
    } else{
        image.style.display = "none";
        button.textContent = "show";
    }
    
});