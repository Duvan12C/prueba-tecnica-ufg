import SwaggerJsdoc from 'swagger-jsdoc'
import path from 'path'

//Meadada info about out API

const options: SwaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI
    info: {
      title: 'Express task api',
      version: '1.0.0',
      description: 'Descripción de tu API',
    },
  },
  apis: [`${path.join(__dirname, './routes/*')}`,], // Especifica la ubicación de tus archivos de rutas
};


//  Docs on JSON format
const specs = SwaggerJsdoc(options);

export default specs;
