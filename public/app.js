window.addEventListener("load", function (){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restfulltodo.herokuapp.com/api/todos", true);
    xhr.onload = function(){
        if(xhr.status === 200){
            addTodos(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
});

function addTodos(todos){
    const ul = document.querySelector(".list-group");
    let li = "";
    (todos.todos).forEach(todo => {
        if(todo.completed){
            li += `<li class="list-group-item"><s>${todo.name}</s></li>`;
        }
        li += `<li class="list-group-item">${todo.name}</li>`;
    });
    ul.innerHTML = li;
}