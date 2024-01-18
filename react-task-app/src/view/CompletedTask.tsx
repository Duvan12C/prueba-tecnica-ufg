import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

const CompletedTask: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; 
      description: string; 
      completed: boolean }[]
  >([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingDescription, setEditingDescription] = useState<string>("");

  const getTasks = () => {
    fetch("http://localhost:3000/api/tasks/completed")
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
      <div className="mt-2 flex justify-center items-center flex-col p-2">
        {tasks.map((task) => (
          <div className="p-2 w-60 sm:w-96 md:w-[800px]  m-1 dark:bg-gray-900 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />

            {editingTaskId === task.id ? (
              <>
                <textarea
                  className="m-2 block w-60 sm:w-96 md:w-[800px]  p-1 text-sm text-gray-900  rounded-lg border border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                />
                <FontAwesomeIcon
                  className="focus:outline-none  color-white  dark:text-white dark:border-gray-600 dark:hover:text-green-500 pr-2"
                  onClick={() => {
                    save(task.id);
                    setEditingTaskId(null);
                  }}
                  icon={faSave}
                />
              </>
            ) : (
              <p className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {task.description}
              </p>
            )}
            <div className="flex pl-10">
              <FontAwesomeIcon
                onClick={() => edit(task.id)}
                icon={faPen}
                className="focus:outline-none  color-white  dark:text-white dark:border-gray-600 dark:hover:text-green-500 pr-2"
              />
              <FontAwesomeIcon
                onClick={() => deleted(task.id)}
                className="focus:outline-none color-white dark:text-white dark:border-gray-600 dark:hover:text-red-500 "
                icon={faTrash}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompletedTask;
