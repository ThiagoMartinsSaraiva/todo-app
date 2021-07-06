let tasks1: ITask[] = []

function getLocalStorageTasks1(): void {
  const localTasks = localStorage.getItem('@todolist/tasks')

  if (localTasks) {
    tasks1 = [...JSON.parse(localTasks)]
    updateScreen1()
  }
}

function setLocalStorageTasks1(): void {
  localStorage.setItem('@todolist/tasks', JSON.stringify(tasks1))
}

function idGenerator1(): string {
  const timestamp = new Date()
  const hours = timestamp.getHours().toString()
  const minutes = timestamp.getMinutes().toString()
  const seconds = timestamp.getSeconds().toString()
  const milliseconds = timestamp.getMilliseconds().toString()

  const id = `${hours}${minutes}${seconds}${milliseconds}`

  return id
}

function createTask1(description: string): void {
  const task: ITask = {
    id: idGenerator1(),
    data: {
      description: description
    }
  }

  tasks1 = [...tasks1, task]
}

function deleteTask1(id: string): void {
  tasks1 = tasks1.filter(task => task.id !== id)
  updateScreen1()
}