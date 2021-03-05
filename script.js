var ulTag=document.getElementById('taskList');

var taskArr=[];
var listToBeRemoved=null;
var value='';

function addTask(){
    value=document.getElementById('inputTask').value;
    if(value.length && !taskArr.includes(value)){
    var listItem=document.createElement("li");
    var textNode=document.createTextNode(value);
    taskArr.push(value);


    var icon=document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-trash-o');
    icon.style.float='right';
    icon.addEventListener('click', (event)=>removeTask(event));

    listItem.appendChild(textNode);
    listItem.appendChild(icon);
    listItem.classList.add('list-group-item');
    ulTag.appendChild(listItem);
    document.getElementById('inputTask').value='';
    }else{
        alert("Please enter valid task");
        document.getElementById('inputTask').value='';
    }
}

function removeTask(event){
    document.getElementsByClassName('modal')[0].style.display='block';
    listToBeRemoved = event.target.parentNode;
}

function confirmDelete(){
    listToBeRemoved && listToBeRemoved.remove();
    document.getElementsByClassName('modal')[0].style.display='none';
    taskArr=taskArr.filter(item=>item!==value);

}

function cancelDelete(){
    document.getElementsByClassName('modal')[0].style.display='none';
}

function onEnterAdd(event){
    if(event.keyCode===13){
        addTask();
    }
}