// src/controllers/taskController.ts

import { Request, Response } from 'express';
import { Connection } from 'mysql2/promise';

class TaskController {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  getAllTasks = async (req: Request, res: Response) => {
    try {
      const [rows] = await this.connection.execute('SELECT * FROM tasks WHERE completed = 0');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  createTask = async (req: Request, res: Response) => {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ error: 'Description is required' });
    }

    try {
      await this.connection.execute('INSERT INTO tasks (description) VALUES (?)', [description]);
      res.json({ success: true, message: 'Task created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  updateTask = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ error: 'Description is required' });
    }

    try {
      await this.connection.execute('UPDATE tasks SET description = ? WHERE id = ?', [description, taskId]);
      res.json({ success: true, message: 'Task updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  deleteTask = async (req: Request, res: Response) => {
    const taskId = req.params.id;

    try {
      await this.connection.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
      res.json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  completedTask = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const { completed } = req.body; // Obtén el estado del checkbox desde el cuerpo de la solicitud
  
    try {
      const completedValue = completed ? 1 : 0;
      await this.connection.execute('UPDATE tasks SET completed = ? WHERE id = ?', [completedValue, taskId]);
      res.json({ success: true, message: 'Task marked as completed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getAllTasksCompleted = async (req: Request, res: Response) => {
    try {
      const [rows] = await this.connection.execute('SELECT * FROM tasks WHERE completed = 1');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
   
}

export default TaskController;
