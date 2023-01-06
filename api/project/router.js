const express = require(`express`)
const Projects = require(`./model`)

const router = express.Router()

router.get(`/`, (req, res) => {
    Projects.findAllProjects()
        .then(projects => {
            const booleanProjects = projects.map(project => {
                if(typeof project.project_completed !== `boolean`){
                    let projBool = project.project_completed

                    if(projBool === `true` || projBool === 1){
                        projBool = true
                    }
                    else{
                        projBool = false
                    }

                   return {
                        ...project,
                    project_completed: projBool
                    }
                }
                return project
            })

            res.json(booleanProjects)
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
        .then(proj => {
            if(typeof proj.project_completed !== `boolean`){
                let projBool = proj.project_completed

                    if(projBool === `true` || projBool === 1){
                        projBool = true
                    }
                    else{
                        projBool = false
                    }
            
                const alteredProj = {
                    ...proj, 
                    project_completed: projBool
                }

                return res.status(201).json(alteredProj)
            }
            return res.status(201).json(proj)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in projects router post response`,
                error: err 
            })
        })
})

module.exports = router