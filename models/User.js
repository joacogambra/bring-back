const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    dni: {type:Number, required:true},
    contraseña:{type:String, required:true},
    rutine:[{type:String, required:false}],
    mail: {type:String, required:true},
    codigo: {type: String, required: true},
    verified:{type:Boolean} 
    // rutine:[{type:mongoose.Types.ObjectId, ref:'rutines'}]
})

const User = mongoose.model('users', schema)
module.exports = User