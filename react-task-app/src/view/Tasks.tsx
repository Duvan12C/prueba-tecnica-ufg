import React, { useState, useEffect } from "react";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; 
      description: string; 
      completed: boolean }[]
  >([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingDescription, setEditingDescription] = useState<string>("");

  const getTasks = () => {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  //***SECCION DE BORRADO DE TAREA */
  const deleted = (id: number) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Filtra la tarea eliminada de la lista de tareas
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  };

//****SECCION DE EDICION DE TAREA */
  const edit = (id: number) => {
    console.log("Edit button clicked");
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTaskId(id);
      setEditingDescription(taskToEdit.description);
    }
  };

  const save = (id: number) => {
    console.log("Función save llamada con ID: ", id);

    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: editingDescription }),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        console.log("Tarea actualizada: ", updatedTask);

        setTasks((prevTasks) => {
          const newTasks = prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
          console.log(
            "Estado de tasks después de la actualización: ",
            newTasks
          );
          return newTasks;
        });
        // Volver a obtener los datos del servidor después de que la tarea se ha actualizado
        getTasks();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onTaskCreated = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
//****SECCION DE ACTUALZIACION DE TAREA */
  const updateCompletionStatus = (id: number, completed: boolean | undefined) => {
    console.log(`Enviando solicitud para actualizar estado de completado al backend: ${completed}`);
    fetch(`http://localhost:3000/api/tasks/${id}/completed`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: completed,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        getTasks(); 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const toggleCompletion = (id: number) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      // Obtén el nuevo estado de completado
      const newCompletedValue = newTasks.find((task) => task.id === id)?.completed;

      // Actualiza el estado en el servidor
      updateCompletionStatus(id, newCompletedValue);

      return newTasks;
    });
  };

  return (
    <>
      <CreateTask onTaskCreated={onTaskCreated} getTasks={getTasks} />
      
      <TaskList 
      tasks={tasks} 
      editingDescription={editingDescription}
      setEditingDescription={setEditingDescription} 
      editingTaskId={editingTaskId}
      setEditingTaskId={setEditingTaskId} 
      save={save} 
      toggleCompletion={toggleCompletion} 
      edit={edit} 
      deleted={deleted} />
    </>
  );
};

export default Tasks;
