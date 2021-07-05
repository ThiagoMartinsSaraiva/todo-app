interface TaskType {
  id: number;
  description: string;
  title?: string; // only example
}

/**
 * Export this module as default
 */
export default class TaskModel implements TaskType {
  readonly id: number;

  description: string;


  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }

  /**
   * Get the title of task
   */
  getTitle(): string {
    return this.description;
  }

  /**
   * Update the new data for the title
   * @param value Set new data for title
   */
  setTitle(value: string): TaskModel {
    this.description = value;

    return this;
  }

}
