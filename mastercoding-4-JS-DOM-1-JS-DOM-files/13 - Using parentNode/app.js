const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

//check if what is clicked has the tag name LI
//sets the li targets within the li variable
//sets ul the parent node
//then removes the list from the unordered list
list.addEventListener("click",function(event){
    if (event.target.tagName == "LI"){
        var li = event.target;
        var ul = li.parentNode;
        ul.removeChild(li);
    }
})