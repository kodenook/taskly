/**
 * Represents a task item in the application
 * @interface Task
 */
export interface Task {
    status: boolean
    title: string
}

/**
 * Type for creating a new task, only requires the title
 * @typedef {Pick<Task, 'title'>} TaskFormCreate
 */
export type TaskFormCreate = Pick<Task, 'title'>
