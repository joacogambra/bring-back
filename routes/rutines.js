let router = require('express').Router()
let schemaRutine = require('../joi/schemaRutine')
let validator = require('../middlewares/validator')

let {create, read , update , destroy} = require('../controllers/rutines')

router.get('/read', read)
router.post('/create', validator(schemaRutine), create)
router.put('/update/:id', update)
router.delete('/delete/:id', destroy)

// router.route('/create')
//     .post(validator(schema), create)

module.exports = router;