const taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const deleteTask = document.getElementById('delete');

class Task {
    constructor(taskInput, completed) {
        this.text = taskInput;
        this.completed = completed;
    }

}

let arrTask = [];
//Funcion para añadir nuevo elemento al array
btnAdd.addEventListener(('click'), () => {
    const textInput = taskInput.value.trim();
    if(textInput !== ""){
        arrTask.push(new Task(textInput, false));
        taskInput.value="";
        displayTasks();
    }else{
        alert("ingresa un texto mano")
    }
});

//funcion para mostrar esos elementos
displayTasks = () => {
    taskList.innerHTML = "";
    //recorre el array
    arrTask.forEach((task, index) => {
        //crea el elemento li
        const li = document.createElement("li");
        //le da contenido al elemento li, si el completed es verdadero su estado es checked, si no es vacio
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        //El primer input del nuevo li cambia su valor si es oprimido - toggleTask
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        //Añade ese elemento a la lista
        taskList.appendChild(li);
        console.log(arrTask);
    });
}
//Si es oprimido va a cambiar de true a false y de false a true
function toggleTask(index) {
    arrTask[index].completed = !arrTask[index].completed;
    displayTasks();
}
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

//Elimina los que ya estan completados
function clearCompletedTasks() {
    arrTask = arrTask.filter(task => !task.completed);
    displayTasks();
}

//Eliminar elementos del array
deleteTask.addEventListener('click', () => {
    arrTask.splice(0, arrTask.length);
    displayTasks();
});


