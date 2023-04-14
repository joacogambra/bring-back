const joi = require('joi')

const schemaRutine = joi.object({
    tipo:joi.string().required().min(3).max(40),
    duracion:joi.number(),
    ejercicios:joi.required(),
})

module.exports = schemaRutine