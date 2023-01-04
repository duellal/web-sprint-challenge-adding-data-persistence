const express = require(`express`)
const Projects = require(`./model`)

const router = express.Router()

router.get(`/`, (req, res) => {
    Projects.findAllProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in projects router get response`,
                error: err 
            })
        })
})

router.post(`/`, (req, res) => {
    const project = req.body
    
    Projects.addProject(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in projects router post response`,
                error: err 
            })
        })
})

module.exports = router