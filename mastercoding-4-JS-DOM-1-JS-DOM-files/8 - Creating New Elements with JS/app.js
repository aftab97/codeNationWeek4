
var input = document.getElementById("input");
var submitButton = document.getElementById("submit");
var hideButton = document.getElementById("showhide-btn");

//This is the first ul list not the first list item in the list 
var list = document.getElementsByTagName("ul")[0];

var lastItem = document.querySelector('li:last-child');

var removeButton = document.getElementById("remove");


submitButton.addEventListener("click", function(){
    //creates a new element with tag <li>
    var listItem = document.createElement("li");

    //adds the string variable to the list item variable
    listItem.textContent = input.value;

    //adds the listItem to the documents inside the ul tag
    list.appendChild(listItem);

    //this makes sure that when submit is clicked the input
    //becomes clear
    input.value="";
})

hideButton.addEventListener("click", function(){
    list.style.display = "none";
});

