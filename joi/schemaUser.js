const joi = require('joi')

const schema = joi.object({
    name:joi.string().required().min(3).max(40),
    lastName:joi.string().required().min(3).max(40),
    dni:joi.number().required().min(1000000).max(50000000),
    contraseña:joi.string().required(),
    mail:joi.any(),
    // email:({minDomainSegments:2}),
    rutine:joi.any()
})

module.exports = schema