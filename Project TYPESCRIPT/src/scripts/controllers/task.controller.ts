import TaskModel from '../models/task.model';
import Storage from '../services/storage';

import TaskView from '../views/task.view';

import CONSTANTS from '../constants/index';
import { idGenerator } from '../helpers/index';

type GetTask = () => TaskModel[];


export default class TaskController {

    private tasks: TaskModel[];
    private storage: Storage;
    private taskView: TaskView;


    constructor() {
        this.tasks = [];
        this.storage = new Storage();
        this.taskView = new TaskView();
    }

    init() {
        const data = this.getTasks() as TaskModel[];

        this.tasks = data;
        this.displayTasks(this.tasks);

        this.taskView.bindEventListeners(this);
    }

    /**
    * Adding a task
    * @param newDescription string
    */
    addTask(newDescription: string): boolean {
        if (newDescription) {
            const id: number = idGenerator();
            const description: string = newDescription;
            const task: TaskModel = new TaskModel(id, description);

            this.tasks.push(task);

            try {
                this.storage.setItem(CONSTANTS.DATABASES.TASKS, JSON.stringify(this.tasks));
                return true;
            } catch (error) {
                return false;
            }
        }

        return false;
    }

    /**
     * Get all of tasks
     */
    getTasks: GetTask = () => {
        const data = this.storage.getItem(CONSTANTS.DATABASES.TASKS);

        try {
            if (JSON.parse(data)) {
                return JSON.parse(data);
            }

            return [];
        } catch (error) {
            return [];
        }
    }


    /**
     * Handling for remove tags
     * @param id
     */
    removeTask(id: number | string): void {
        const data = this.getTasks() as TaskModel[];
        this.tasks = data;
        this.tasks = this.tasks.filter(task => task.id != id)

        this.storage.setItem(CONSTANTS.DATABASES.TASKS, JSON.stringify(this.tasks));
    }

    /**
     * Handling for display tags
     * @param task TaskModel[]
     */
    displayTasks(task: TaskModel[]): void {
        this.taskView.renderTasks(task);
    }

}