const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//firebase
const functions = require('firebase-functions')

const app = express()
// понимание json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// обход проверки безопасности
app.use(cors())

const routeWorkers = require('./routs/workers')
const routeTech = require('./routs/teches')
const routeCategoryes = require('./routs/categoryes')
app.use("/api", routeWorkers)
app.use("/api", routeTech)
app.use("/api", routeCategoryes)

const URL = 'mongodb://127.0.0.1:27017/fortuna'

const port = 5000;
const server = async ()=>{
  try{
    
    app.listen(port, ()=> { console.log(`Server started on port: ${port}`) })
    
    mongoose.connect(URL)
    .then(() => console.log('Connected!'))
    
  }
  catch(e){
    console.log('Server invalid', e.message)
    process.exit()
  }
}
server()

//exports.api = functions.https.onRequest(app)
  


