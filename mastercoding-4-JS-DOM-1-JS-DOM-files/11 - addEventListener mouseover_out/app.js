const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
/*declare new const*/

var listItem = document.getElementsByTagName("li");

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})

/*New code below*/

for (let i=0;i<listItem.length;i++){
    listItem[i].addEventListener("mouseover", function(){
        listItem[i].textContent = listItem[i].textContent.toUpperCase();
    });

    listItem[i].addEventListener("mouseout", function(){
        listItem[i].textContent = listItem[i].textContent.toLowerCase();
    });
}
// the new items that are added will now work as well
listItem.addEventListener("mouseover", function(event){
    if (event.target.tagName == "LI"){
    event.target.textContent.toUpperCase();
    }
})