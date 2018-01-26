// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

function loadEventListeners(){
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task')
    }
    // create li element
    const li = document.createElement('li')
    // add class
    li.className = 'colection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li)
    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

// clear tasks
function clearTasks(){
    // taskList.innerHTML = '';

    // faster:
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // https://jsperf.com/innerhtml-vs-removechild
}

// filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none'
        }
    });
}