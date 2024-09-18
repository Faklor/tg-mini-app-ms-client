const {Router} = require('express')
const Tech = require('../models/tech')

const router = Router()

router.get('/teches', async (req, res)=>{
    try{
        const tech = await Tech.find({}).sort({catagory:1})
        // res.json(tech)
        res.json('hello')
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})



//------------post--------------------------
router.post('/teches', async (req, res)=>{
    try{

        const {id} = req.body

        const tech = await Tech.findOne({id:id})
        res.json(tech)
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/addOrder', async (req, res)=>{
    try{

        const {id,oldID, date, worker, part} = req.body

        let order = {
            date:date,
            worker:worker,
            part:part
        }

        const data = await Tech.findOneAndUpdate({id:id},{$push:{orders:order}})

        let old_count = 0
        
        const findOld = await Tech.findOne({id:oldID})

        if(findOld){
            old_count =  findOld.parts[part.index].count 
            const new_data = await Tech.findOneAndUpdate({id:oldID},{$set:{[`parts.${part.index}.count`]:old_count - part.count}})
        }    
       

        res.json({message:'Запчасть выдана'})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/addPart', async (req, res)=>{
    try{

        const {id, name, catagory, serialNumber, sellNumber, count, sum, nameContact, linkContact, manufacturer} = req.body

        let part = {
            name: name,
            catagory: catagory,
            serialNumber: serialNumber,
            sellNumber: sellNumber,
            manufacturer:manufacturer,
            count: count,
            sum:sum,
            contact:{
                name: nameContact,
                link: linkContact
            }

        }

        const data = await Tech.findOneAndUpdate({id:id},{$push:{parts:part}})

        

        res.json({message:'Запчасть добавлена', data:data})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/addCount', async (req, res)=>{
    try{

        let {id, index_of_part, count} = req.body

        const data = await Tech.findOneAndUpdate({id:id},{$set:{[`parts.${index_of_part}.count`]:count+1}})

        

        res.json({message:'Запчасть обналена на +1 шт.'})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/deleteCount', async (req, res)=>{
    try{

        let {id, index_of_part, count} = req.body

        const data = await Tech.findOneAndUpdate({id:id},{$set:{[`parts.${index_of_part}.count`]:count-1}})

        

        res.json({message:'Запчасть обналена на -1 шт.'})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/deletePart', async (req, res)=>{
    try{

        const {id, part} = req.body

        const data = await Tech.findOneAndUpdate({id:id},{$pull:{parts:{name:part.name, catagory:part.catagory,serialNumber:part.serialNumber,sellNumber:part.sellNumber,manufacturer:part.manufacturer,count:part.count,sum:part.sum,contact:part.contact}}})

        
        res.json({message:'Запчасть удалена',data:data})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

router.post('/updatePart', async (req, res)=>{
    try{

        const {id, index_of_part, itemEdit} = req.body

        const data = await Tech.findOneAndUpdate({id:id},{$set:{[`parts.${index_of_part}.${itemEdit.name}`]:itemEdit.data}})
        
        
        res.json({message:'Запчасть обнавленна'})
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})



module.exports = router