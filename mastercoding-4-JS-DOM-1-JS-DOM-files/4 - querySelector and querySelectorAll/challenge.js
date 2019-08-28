//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

const liItems = document.querySelectorAll("li");

for (i=0; i<liItems.length; i++){
        liItems[i].style.color = colours[i];
}