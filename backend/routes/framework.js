const express = require('express');
const router = express.Router();
const framework = require('../models/framework');

router.get('/', (req, res) => {
    framework.find({}, (error, data) => {
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})

router.post('/insert', async (req, res) => {
    const {name} = req.body

    const framework = {
        name
    }

    if(name && language){
        try {
            await Framework.create(framework)
            res.status(201).json({message: 'Framework inserido com sucesso!'})
        } catch (error) {
            res.status(500).json({error: error})
        }
    }
})

router.post('/insert-from-file', async (req, res) => {
    const {user, pass} = req.body

    if(user && pass){
        const frameworkFromFile = require('../middlewares/frameworkFromFile')
        frameworkFromFile.run().then((status)=> res.status(status).json({message: 'Framework inserido com sucesso!'}))
        .catch((status) => res.status(status).json({message: 'Algo deu errado.'}))
    }
})


module.exports = router