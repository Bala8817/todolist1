let button=document.getElementById('add')
let todoList=document.getElementById('todolist')
let input=document.getElementById('input');

let todoStore=[];
window.onload=()=>{
  todoStore=JSON.parse(localStorage.getItem('todoStore')) || []
  todoStore.forEach(todo=>todovalue(todo))
  console.log(todoStore)
}

button.addEventListener('click',()=>{
    todoStore.push(input.value)
    localStorage.setItem('todoStore',JSON.stringify(todoStore))
    todovalue(input.value)
    input.value=''
})

function todovalue(todo){
    let para=document.createElement('p');
    para.innerText=todo;
    todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)

    }) 
}
// remove value
function remove(todo){
    let index=todoStore.indexOf(todo)
    if(index>-1){
    todoStore.splice(index,1)
    }
    localStorage.setItem('todoStore',JSON.stringify(todoStore))
}



