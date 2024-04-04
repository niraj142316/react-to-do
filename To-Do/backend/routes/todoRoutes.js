import express from 'express';
const router= express.Router();
import { createDB, createList, createTable, deleteTask, viewTasks } from '../controllers/todoController.js';


//Routes
router.get("/create/database", createDB); //routes for creating database first
router.get("/create/table", createTable); //then creating table inside the created database
router.post("/create/list", createList);  //then post the task or add new task
router.get("/show/tasks", viewTasks);     //then view the all tasks to be added
router.delete("/delete/task/:id", deleteTask); // can be delete one by one task using their id

export default router;