interface ITask {
    id: string
    data: {
        description: string
    }
}

const taskInput1 = document.getElementById('newTask') as HTMLInputElement
const taskList1 = document.getElementById('list') as HTMLDivElement
const form1 = document.forms[0]

function start1(): void {
  getLocalStorageTasks1()
}

form1.addEventListener('submit', (event: Event) => {
  event.preventDefault()
  newTask1()
})

function newTask1(): void {
  const taskDescription = taskInput1.value
  
  if (taskDescription) {
    createTask1(taskDescription)
    updateScreen1()
  }
}

function updateScreen1(): void {
  let list = "<ul>"
  tasks1.map((task) => {
    list += createItemList1(task)
  })
  list += "</ul>"

  taskList1.innerHTML = list
  taskInput1.value = ""

  setLocalStorageTasks1()
}

function createItemList1(task: ITask): string {
  return `
    <li id-data="${task.id}">
      <span>${task.data.description}</span>
      <button class="remove-button" onclick="removeTask1(this)" id-data="${task.id}"><i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </li>
  `
}

function removeTask1(element: HTMLElement): void {
  const id = element.getAttribute('id-data')
  deleteTask1(id)
}

start1()