const {Router} = require('express')
const Workers = require('../models/workers')

const router = Router()

router.get('/workers', async (req, res)=>{
    try{
        const Worker = await Workers.find({})
        res.json(Worker)
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})



module.exports = router