let rutines = [
    {
        tipo:'hombros',
        duracion:60,
        ejercicios:['press militar', 'vuelos frontales', 'posteriores con polea']
    },
    {
        tipo:'biceps',
        duracion:40,
        ejercicios:['biceps concentrado', 'barra' , 'alternados con mancuerna']
    },
    {
        tipo:'piernas',
        duracion:120,
        ejercicios:['prensa', 'gemelos', 'camilla cuadricep', 'isquio con barra']
    }
]

require('dotenv').config()
require('../../config/database')
const Rutine = require('../Rutine')

rutines.forEach(e => {
    Rutine.create(
        {
            tipo: e.tipo,
            duracion: e.duracion,
            ejercicios:e.ejercicios
        }
    )
})