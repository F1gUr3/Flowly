import e from "express";
const router = e.Router();
import { getAllTasks } from '../controllers/TaskController.js';

router.get('/all', getAllTasks);

export default router;