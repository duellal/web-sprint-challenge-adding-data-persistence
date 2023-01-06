const express = require(`express`)
const Tasks = require(`./model`)

const router = express.Router()

router.get(`/`, (req, res) => {
    Tasks.findAllTasks()
        .then(tasks => {
            let booleanTask = tasks.map(task => {
                if(typeof task.task_completed !== `boolean`){
                    let taskBool = task.task_completed

                    if(taskBool === `true` || taskBool === 1){
                        taskBool = true
                    }
                    else{
                        taskBool = false
                    }

                    return {
                        ...task,
                    task_completed: taskBool
                    }
                }
                return task
            })
            
            res.json(booleanTask)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in tasks router get response`,
                error: err
            })
        })
    })

router.post(`/`, (req, res) => {
    const task = req.body

    Tasks.addTask(task)
        .then(task => {
            if(typeof task !== `boolean`){
                let taskBool = task.task_completed

                if(taskBool === `true` || taskBool === 1){
                    taskBool = true
                }
                else{
                    taskBool = false
                }

                const alteredTask = {
                    ...task,
                    task_completed: taskBool
                }
                return res.status(201).json(alteredTask)
            }
            return res.status(201).json(task)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in tasks router post response`,
                error: err
            })
        })
})

module.exports = router