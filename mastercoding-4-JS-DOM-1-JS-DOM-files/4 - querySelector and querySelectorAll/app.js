

const evenItems = document.querySelectorAll("li:nth-child(even)");

for (i=0;i < evenItems.length; i++){
    evenItems[i].style.color = "lightgreen";
}