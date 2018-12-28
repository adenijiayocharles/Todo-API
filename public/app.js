window.addEventListener("load", function (){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restfulltodo.herokuapp.com/api/todos", true);
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(xhr.responseText);
        }
    }
    xhr.send();
});