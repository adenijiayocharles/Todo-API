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
    (todos.todos).forEach(todo => {
        addTodo(todo);
    });   
}

function addTodo(todo){
    const ul = document.querySelector(".list-group");
    let listNode = document.createElement("li");
    let textNode = document.createTextNode(todo.name);    
    listNode.appendChild(textNode);
    listNode.setAttribute("class", "list-group-item");
    if(todo.completed){
        listNode.classList.add("done");
    }
    ul.appendChild(listNode);
}

document.querySelector(".todoInput").addEventListener("keypress", (e) => {
    if(e.keyCode == 13){
        createTodo();
    }
});

function createTodo(){
    let xhr = new XMLHttpRequest();
    let userInput = document.querySelector("#name").value;
    xhr.open("POST", "https://restfulltodo.herokuapp.com/api/todos/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function(){
        console.log(userInput);
        if(xhr.status === 201){
           let todo = JSON.parse(xhr.responseText).todo;
           addTodo(todo);
           document.querySelector("#name").value = "";
        }
    }
    xhr.send(JSON.stringify({ 
            "name": userInput,
        })
    );    
}