import express from 'express';
import * as dotenv from 'dotenv';
import { createConnection, Connection } from 'mysql2/promise';
import TaskRoutes from './routes/taskRoutes';
import SwaggerUiOptions  from 'swagger-ui-express';
import specs from './swagger';


dotenv.config();

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const dbConfig = {
 host: process.env.DB_HOST || 'localhost',
 user: process.env.DB_USER || 'root',
 password: process.env.DB_PASSWORD || 'root',
 database: process.env.DB_NAME || 'tasks_db',
};

let connection: Connection;

const connectToDatabase = async () => {
 connection = await createConnection(dbConfig);
 console.log('Connected to database');



// Solucion error de cors
 app.use(cors());

// implementar swagger
app.use('/api-docs', SwaggerUiOptions.serve, SwaggerUiOptions.setup(specs))

//ruta princiapl de api
 app.use('/api', TaskRoutes(connection));
};

const disconnectFromDatabase = async () => {
 if (connection) {
   await connection.end();
 }
};

app.use(express.json());

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
 connectToDatabase();
});

process.on('SIGINT', async () => {
 await disconnectFromDatabase();
 process.exit(0);
});
