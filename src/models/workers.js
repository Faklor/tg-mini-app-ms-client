const {Schema, model} = require('mongoose')

const workerSchema = new Schema({
    name:{type:String}
})

 
module.exports = model('workers', workerSchema)