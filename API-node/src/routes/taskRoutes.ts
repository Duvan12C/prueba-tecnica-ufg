import express from 'express';
import TaskController from '../controllers/taskController';
import { Connection } from 'mysql2/promise';

const taskRoutes = (connection: Connection) => {
  const taskController = new TaskController(connection);
  const router = express.Router();

  /**
   * @swagger
   * /api/tasks:
   *   get:
   *     summary: Obtener listado de todas las tareas nuevas que no estén completadas
   *     responses:
   *       500:
   *         description: Error - Internal Server Error
   */
  router.get('/tasks', taskController.getAllTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success - Task created successfully
 *       400:
 *         description: Error - Description is required
 *       500:
 *         description: Error - Internal Server Error
 */
router.post('/tasks', taskController.createTask);


/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarea
 *         required: true
 *         schema:
 *           type: integer
 *       - in: body
 *         name: description
 *         description: Cuerpo de la solicitud con la nueva descripción
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - description
 *               properties:
 *                 description:
 *                   type: string
 *     responses:
 *       200:
 *         description: Success - OK
 *       400:
 *         description: Error - Bad Request (Description is required)
 *       500:
 *         description: Error - Internal Server Error
 */
router.put('/tasks/:id', taskController.updateTask);


  /**
   * @swagger
   * /api/tasks/{id}:
   *   delete:
   *     summary: Eliminar una tarea por su ID
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID de la tarea
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Success - Task deleted successfully
   *       500:
   *         description: Error - Internal Server Error
   */
  router.delete('/tasks/:id', taskController.deleteTask);

  /**
   * @swagger
   * /api/tasks/{id}/completed:
   *   put:
   *     summary: Marcar una tarea como completada o no completada
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID de la tarea
   *         required: true
   *         schema:
   *           type: integer
   *       - in: body
   *         name: completed
   *         description: Estado de la tarea (true para completada, false para no completada)
   *         required: true
   *         schema:
   *           type: boolean
   *     responses:
   *       200:
   *         description: Success - OK
   *       500:
   *         description: Error - Internal Server Error
   */
  router.put('/tasks/:id/completed', taskController.completedTask);

  /**
   * @swagger
   * /api/tasks/completed:
   *   get:
   *     summary: Obtener listado de todas las tareas completadas
   *     responses:
   *       500:
   *         description: Error - Internal Server Error
   */
  router.get('/tasks/completed', taskController.getAllTasksCompleted);

  return router;
};

export default taskRoutes;
