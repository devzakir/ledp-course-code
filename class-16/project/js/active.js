document.getElementById('todoForm').addEventListener('submit', function(e){
    e.preventDefault();

    let inputElement = document.getElementById('todoname');
    let list = document.getElementById('todoList');

    var listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(inputElement.value));
    listItem.classList.add("list-group-item");

    list.appendChild(listItem);

    inputElement.value = '';
});