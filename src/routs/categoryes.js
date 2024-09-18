const {Router} = require('express')
const fs = require('fs')

const router = Router()


router.get('/categoryes', async (req, res)=>{
    try{

        let arrayImg = []
        //const name = 'bodyCar.svg'

        let files = fs.readdirSync('./public/categoryes')
        files.forEach(file => {
            // if(file === name){
            //     a = fs.readFileSync(`./src/res/categoryes/${file}`)
            // }
            let text = file.split('.')[0]
            arrayImg.push({title:text,file:file}) 
        })
        
        //console.log(arrayImg)
        res.json(arrayImg)
    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

module.exports = router
