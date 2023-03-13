let models = []

require('dotenv').config()
require('../../config/database')
const Model = require('ruta del modelo')

models.forEach(elemento => {
    Model.create(
        {
            example: elemento.example,
            example2: elemento.example2,
            fecha: elemento.fecha,
            booleano: elemento.booleano,
            objeto: elemento.objeto,
            array: elemento.array
        }
    )
})