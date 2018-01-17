// set local storage item (on devtools app, storageunder local storage, local host)
localStorage.setItem('name', 'Jhon');

// set local storage item (on devtools app, storageunder session storage, local host)
sessionStorage.setItem('name', 'Beth');

// remove from Storage 
// localStorage.removeItem('name');

// get value from storage
const name = localStorage.getItem('name');
console.log(name);

// ----------->
// save values on array as string needs this setup:

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task saved');

    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});

