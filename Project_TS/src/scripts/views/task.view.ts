import { qs } from '../helpers/index';
import TaskController from '../controllers/task.controller';
import CONSTANTS from '../constants/index';

export default class TaskView {

  private taskInput: any;
  private taskBtnAdd: Element;
  private taskContentData: Element;

  constructor() {
    this.taskInput = qs('#newTask');
    this.taskBtnAdd = qs('#made-done');
    this.taskContentData = qs('#list');
  }

  /**
 * Event handling
 * @param controller
 */
  bindEventListeners(controller: TaskController): void {

    /**
     * Handle for mark done for all of tasks
     */
    this.taskBtnAdd.addEventListener('click', () => {
      const newTask = this.taskInput?.value;
      if (newTask) {
        controller.addTask(newTask);
        this.taskInput.value = '';
        document.location.reload();
      }
    });


    /**
      * Handle for actions on content
      */
    this.taskContentData.addEventListener('click', (e: Event) => {
      const targetNode = e.target as HTMLElement;

      const taskId = targetNode.getAttribute('data-task-id');
      const action = targetNode.getAttribute('data-action');

      if (action === CONSTANTS.ACTIONS.REMOVE) {
        controller.removeTask(taskId);
        document.location.reload();
      }

    });
  }


  /**
 * Render all of tasks to UI
 */
  renderTasks(tasks): TaskView {
    this.taskContentData.innerHTML = '';

    tasks.map((task: Record<string, unknown>) => {
      const taskItem = `
        <li data-task-id="${task.id}">
          <span>${task.description}</span>
            <button data-task-id="${task.id}" data-action="Remove" class="remove-button">
              Remover
            </button>
        </li>`;

      this.taskContentData.innerHTML += `${taskItem}`;

      return true;
    });
    return this;
  }


}
