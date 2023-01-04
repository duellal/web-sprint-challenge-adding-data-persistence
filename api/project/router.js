const express = require(`express`)
const Projects = require(`./model`)

const router = express.Router

router.get(`/`, (req, res) => {
    Projects.findAll()
        .then(project => {
            res.json(project)
        })
        .catch(err => console.log(`ERROR occurred in projects router, get all response`, err))
})

router.post(`/`, (req, res) => {
    const project = req.body

    Projects.add(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => console.log(`ERROR occurred in projects router, post`, err))
})

module.exports = router