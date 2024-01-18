# Proyecto de Desarrollo Fullstack

Este repositorio contiene el código fuente para una aplicación de gestión de tareas desarrollada como parte de la prueba técnica para el puesto de Desarrollador Fullstack Junior en la Universidad Francisco Gavidia.

## Parte 1: Desarrollo de una API REST (Backend)

### Tecnologías Utilizadas
- NodeJS
- TypeScript
- Express
- MySQL2
- Nodemon
- [Swagger](https://swagger.io/)
- Docker (opcional)

### Base de Datos
- Se utiliza MySQL como el sistema de gestión de bases de datos relacional.

### Instrucciones de Ejecución Local
1. Clona este repositorio.
2. Navega a la carpeta "api".
3. Copia el archivo `.env.example` y crea un nuevo archivo llamado `.env`.
4. Abre el archivo `.env` en un editor de texto y completa las siguientes variables con tus credenciales de la base de datos:

    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=tasks_db
    ```

5. Ejecuta `npm install` para instalar las dependencias.
6. Ejecuta `npm run dev` para iniciar el servidor en modo de desarrollo.

### Elecciones Tecnológicas y Herramientas Utilizadas en el Backend
- **Express:** Se eligió Express como el framework de servidor web debido a su simplicidad y flexibilidad.
- **MySQL2:** Se utiliza MySQL2 como el controlador de base de datos para interactuar con una base de datos MySQL.
- **Nodemon:** Nodemon se utiliza en modo de desarrollo para facilitar la recarga automática del servidor al realizar cambios en el código.
- **[Swagger](https://swagger.io/):** La documentación de la API se genera automáticamente utilizando Swagger para facilitar la comprensión y prueba de los endpoints. Puedes acceder a la documentación de Swagger [aquí](http://localhost:3000/api-docs/) (ajusta el puerto según la configuración de tu servidor).

### Documentación
La documentación detallada de la API REST se encuentra en [Swagger Documentation](http://localhost:3000/api-docs/) (Reemplace con el enlace real).

## Parte 2: Desarrollo de una Aplicación Web (Frontend)

### Tecnologías Utilizadas
- React
- TypeScript
- Vite
- TailwindCSS ([Documentación](https://tailwindcss.com/))
- React Router
- Flowbite ([Documentación](https://flowbite.com/))
- Font Awesome ([Documentación](https://fontawesome.com/))

### Instrucciones de Ejecución Local
1. Navega a la carpeta "frontend".
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm run dev` para iniciar la aplicación en modo de desarrollo.

### Elecciones Tecnológicas y Herramientas Utilizadas en el Frontend
- **React:** Se eligió React como el framework de frontend por su popularidad y eficiencia en el desarrollo de interfaces de usuario.
- **Vite:** Vite se utiliza como herramienta de construcción para proporcionar un entorno de desarrollo rápido.
- **TailwindCSS:** Se utiliza TailwindCSS como el framework de estilo para facilitar el diseño y la creación de interfaces de usuario responsivas. Consulta la [documentación de TailwindCSS](https://tailwindcss.com/) para más detalles.
- **React Router:** React Router se utiliza para la navegación entre diferentes vistas en la aplicación.
- **Flowbite:** Se utiliza Flowbite para mejorar el diseño y la estética de la interfaz de usuario. Puedes obtener más información en la [documentación de Flowbite](https://flowbite.com/).
- **Font Awesome:** Se utiliza Font Awesome para iconos. Visita la [documentación de Font Awesome](https://fontawesome.com/) para explorar los iconos disponibles.

### Funcionalidades Principales
- Listar Tareas.
- Crear, Editar y Eliminar Tareas.
- Marcar Tareas como Completadas.
- Vista de Tareas Completadas para Gestionarlas.

### Documentación Adicional del Frontend
La documentación específica sobre el frontend se encuentra en el [README de Frontend](./frontend/README.md).

## Parte 3: Documentación General

### Contacto
Para preguntas o información adicional, ponte en contacto con el desarrollador Amílcar Menjívar a través de anuila@ufg.edu.sv.
