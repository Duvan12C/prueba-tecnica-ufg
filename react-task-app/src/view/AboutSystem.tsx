import React from "react";

const AboutSystem: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="  border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-900 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PRUEBA FULLSTACK 2024 UFG
              </h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
              El proyecto <strong>"Task"</strong>  es una aplicación web desarrollada con React y
              Tailwind CSS que permite la gestión de tareas. Los usuarios pueden
              realizar diversas operaciones, como crear nuevas tareas,
              editarlas, eliminarlas y marcarlas como completadas. La interfaz
              limpia y amigable facilita la interacción con el sistema.
              Características principales:
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b>Creación de Tareas: </b>  Los usuarios pueden agregar nuevas tareas
              mediante un formulario que captura la descripción de la tarea. Al
              crear una tarea, se refleja dinámicamente en la lista de tareas
              pendientes.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
             <b>Edición y Eliminación:</b>  La aplicación ofrece la posibilidad de
              editar y eliminar tareas existentes. Al hacer clic en el icono de
              lápiz, la tarea se vuelve editable, y al confirmar los cambios, se
              actualiza en tiempo real. Del mismo modo, la eliminación de tareas
              se realiza de manera instantánea.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
             <b>Completado de Tareas: </b> Cada tarea incluye un checkbox que permite
              marcarla como completada. Al activar este checkbox, la tarea se
              mueve automáticamente a la sección "Completed Tasks". Esta función
              simplifica el seguimiento de las tareas completadas.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
             <b>Diseño Responsivo con Tailwind CSS:</b> El frontend utiliza la
              biblioteca de diseño Tailwind CSS para garantizar una interfaz
              atractiva y responsive. La aplicación es accesible desde
              diferentes dispositivos y tamaños de pantalla.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
            <b> División en Vistas:</b>  La interfaz se organiza en vistas específicas,
              como la lista principal de tareas y la sección de tareas
              completadas. Esto mejora la navegabilidad y la experiencia del
              usuario al gestionar sus tareas.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
              En resumen, el proyecto "Task" proporciona una solución eficiente
              y fácil de usar para la administración de tareas, con
              funcionalidades clave implementadas en el frontend utilizando
              React y un diseño moderno y estilizado gracias a Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutSystem;
