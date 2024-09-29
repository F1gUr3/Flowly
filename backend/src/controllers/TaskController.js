import Task from "../models/TaskModel.js";

export async function getAllTasks(req, res) {

    try{
        const tasks = await Task.findAll();
        return res.status(200).json(tasks); 
    }
    catch(e){
        return res.status(500).json({ message: `An error occurred: ${e.message}` }); 
    }

}
