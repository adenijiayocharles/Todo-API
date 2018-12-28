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
    listNode.setAttribute("data-id", todo._id);
    let textNode = document.createTextNode(todo.name);    


    let span = document.createElement("span");
    span.setAttribute("onclick","removeTodo(this);");

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa");
    deleteIcon.classList.add("fa-trash");
    span.appendChild(deleteIcon);


    listNode.appendChild(textNode);
    listNode.setAttribute("class", "list-group-item");
    if(todo.completed){
        listNode.classList.add("done");
    }

    listNode.appendChild(span);
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
    if(userInput == "" || userInput == " "){
        alert("Please enter a value");
        return false;
    }
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

function removeTodo(arg){
    let todoId = arg.parentElement.getAttribute("data-id");
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `https://restfulltodo.herokuapp.com/api/todos/${todoId}`, true);
    xhr.onload = function(){
        if(xhr.status === 200){
            arg.parentElement.style.display = "none";
        }
    }
    xhr.send(null);
}