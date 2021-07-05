import TaskController from './controllers/task.controller';

export default class App {

  private taskController: TaskController;


  constructor() {
    this.taskController = new TaskController();
  }

  startApp(): void {
    this.taskController.init();
  }
}
