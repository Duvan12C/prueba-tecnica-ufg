// src/models/taskModel.ts

import { Connection } from 'mysql2/promise';

class TaskModel {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  getAllTasks = async () => {
    const [rows] = await this.connection.execute('SELECT * FROM tasks  WHERE completed = 0');
    return rows;
  };

  createTask = async (description: string) => {
    await this.connection.execute('INSERT INTO tasks (description) VALUES (?)', [description]);
  };

  updateTask = async (taskId: string, description: string) => {
    await this.connection.execute('UPDATE tasks SET description = ? WHERE id = ?', [description, taskId]);
  };

  deleteTask = async (taskId: string) => {
    await this.connection.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
  };

  completedTask = async (taskId: string) => {
    await this.connection.execute('UPDATE tasks SET completed = 1 WHERE id = ?', [taskId]);
   };

   getCompletedTask = async () => {
    const [rows] = await this.connection.execute('SELECT * FROM tasks  WHERE completed = 1');
    return rows;

   };
   
}

export default TaskModel;
