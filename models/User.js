const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    dni: {type:Number, required:true},
    rutine:[{type:String, required:true}]
})

const User = mongoose.model('users', schema)
module.exports = User