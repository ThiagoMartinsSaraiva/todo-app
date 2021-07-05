let tasks = []

function getLocalStorageTasks() {
  const localTasks = localStorage.getItem('@todolist/tasks')

  if (localTasks) {
    tasks = [...JSON.parse(localTasks)]
    updateScreen()
  }
}

function setLocalStorageTasks() {
  localStorage.setItem('@todolist/tasks', JSON.stringify(tasks))
}

function idGenerator() {
  const timestamp = new Date()
  const hours = timestamp.getHours().toString()
  const minutes = timestamp.getMinutes().toString()
  const seconds = timestamp.getSeconds().toString()
  const milliseconds = timestamp.getMilliseconds().toString()

  const id = `${hours}${minutes}${seconds}${milliseconds}`

  return id
}

function createTask(description) {
  const task = {
    id: idGenerator(),
    data: {
      description: description
    }
  }

  tasks = [...tasks, task]
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id != id)
  updateScreen()
}