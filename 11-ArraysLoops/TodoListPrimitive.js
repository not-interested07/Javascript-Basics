const todoList = [];
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
}