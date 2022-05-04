const express = require('express');
const router = express.Router();
const framework = require('../models/framework');
const frameworkByJob = require('../models/FrameworkByJob');

router.get('/', (req, res) => {
    framework.find({}, (error, data) => {
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})

router.get('/by-job-offers', (req, res) => {
    frameworkByJob.aggregate([
        {
            $group: {
                _id: {
                    framework: "$framework",
                    date: "$date"
                },
                _count: {$count: {}}
            }
        },
        {
            $group: {
                _id: "$_id.date",
                frameworks: {
                    $push: {
                        tecnology: "$_id.framework",
                        qtd: "$_count"
                    },
                }
            },
        },
        {
            $sort: {_id: -1}
        }
    ], (error, data) => {
        if(error){
            console.error(error)
        }else{
            res.json(data)
        }
    })
})

router.get('/by-job-offers/city', (req, res) => {

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