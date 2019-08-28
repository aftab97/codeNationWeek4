const input = document.getElementById('input');
const button = document.getElementById('submit');
var removeButton = document.getElementById('remove')
/*add new const below*/

//This is the first ul list not the first list item in the list 
var list = document.getElementsByTagName("ul")[0];

var lastItem = document.querySelector('li:last-child')

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

removeButton.addEventListener("click", function(){
    list.removeChild(lastItem);
})