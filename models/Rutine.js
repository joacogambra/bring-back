const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tipo: {type:String, required:true},
    duracion: {type:Number, required:false},
    ejercicios:[{type:String}]
})

const Rutine = mongoose.model('rutines', schema)
module.exports = Rutine