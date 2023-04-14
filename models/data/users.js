// let users = [
//     {
//         name: 'example',
//         lastName: 'example',
//         dni: 123,
//         rutine: ['legs', 'arms']
//     },
// ]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

users.forEach(e => {
    User.create(
        {
            name: e.name,
            lastName: e.lastName,
            dni: e.dni,
            contraseña:e.contraseña,
            rutine: e.rutine
        }
    )
})