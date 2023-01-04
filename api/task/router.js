const express = require(`express`)
const Tasks = require(`./model`)

const router = express.Router()

router.get(`/`, (req, res) => {
    Tasks.findAllTasks()
        .then(tasks => {
            res.json(tasks)
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
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in tasks router post response`,
                error: err
            })
        })
})

module.exports = router