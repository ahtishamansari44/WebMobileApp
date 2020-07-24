function getTodo(){
   var todo = document.getElementById('todo-input');
   var li = document.createElement('li');
   var liText = document.createTextNode(todo.value);
   var span = document.createElement('span');
   var span2 = document.createElement('span');
   var spanText2 = document.createTextNode("icon1");
   span.setAttribute('onclick', 'deleteTodo(this)')
   span.setAttribute('class', 'fa fa-trash-o')
   span2.setAttribute('onclick', 'editeTodo(this)')
   span2.setAttribute('class', 'fa fa-pencil-square-o')
   li.appendChild(liText);
   li.appendChild(span);
   li.appendChild(span2)
   document.getElementById('todo-list').appendChild(li);
   todo.value = "";
}

function deleteTodo(e){
  e.parentNode.remove();
}

function editeTodo(e){
    var todo = e.parentNode.firstChild.nodeValue;
    var editeTodo = prompt("Enter Edite Value", todo);
    console.log(todo);
    e.parentNode.firstChild.nodeValue = editeTodo;
}

function deleteAllTodo(){
document.getElementById('todo-list').innerHTML = ""
}