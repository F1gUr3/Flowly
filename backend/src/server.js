import express from 'express';
import cors from 'cors';
import db from '../src/db/db.js'
import dotenv from 'dotenv';
import taskRoutes from './routes/TaskRoutes.js'
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());


const port = process.env.PORT || 2999;


try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


//API routes

app.use("/api/tasks", taskRoutes);



app.listen(port, () => {
    console.log("Listening on port: " + port);
})

