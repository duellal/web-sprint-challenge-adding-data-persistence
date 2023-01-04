const express = require(`express`)
const Resources = require(`./model`)

const router = express.Router()

router.get(`/`, (req, res) => {
    Resources.findAllResources()
        .then(resources => {
            res.json(resources)
        }) 
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in resource router get response`,
                error: err
            })
        })
})

router.post(`/`, (req, res) => {
    const resource = req.body

    Resources.addResource(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(404).json({
                message: `ERROR occurred in resource router post response`,
                error: err
            })
        })
})

module.exports = router