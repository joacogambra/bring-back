let router = require('express').Router()
let schema = require('../joi/schemaUser')
let validator = require('../middlewares/validator')

let {create, read , update , destroy} = require('../controllers/user')

router.get('/read', read)
router.post('/create', validator(schema), create)
router.put('/update/:id', update)
router.delete('/delete/:id', destroy)

// router.route('/create')
//     .post(validator(schema), create)

module.exports = router;
