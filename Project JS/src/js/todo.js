const taskInput = document.getElementById('newTask')
const taskList = document.getElementById('list')
const form = document.forms[0]

function start() {
  getLocalStorageTasks()
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  newTask()
})

function newTask() {
  const taskDescription = taskInput.value
  
  if (taskDescription) {
    createTask(taskDescription)
    updateScreen()
  }
}

function updateScreen() {
  let list = "<ul>"
  tasks.map((task) => {
    list += createItemList(task)
  })
  list += "</ul>"

  taskList.innerHTML = list
  taskInput.value = ""

  setLocalStorageTasks(tasks)
}

function createItemList(task) {
  return `
    <li id-data="${task.id}">
      <span>${task.data.description}</span>
      <button class="remove-button" onclick="removeTask(this)" id-data="${task.id}"><i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </li>
  `
}

function removeTask(element) {
  const id = element.getAttribute('id-data')
  deleteTask(id)
}

start()