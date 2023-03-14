const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    example: {type:String, required:true},
    example2: {type:Number, required:false},
    fecha: { type: Date, default: Date.now },
    booleano: {type:Boolean},
    paraRelacionar:{type: mongoose.Types.ObjectId, ref:'collection'},
    array:[{type:String}]
})

const Model = mongoose.model('parametro de la coleccion', schema)
module.exports = Model