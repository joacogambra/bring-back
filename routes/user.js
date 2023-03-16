let router = require('express').Router()
let {create, read , update , destroy} = require('../controllers/user')

router.get('/read', read)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', destroy)

module.exports = router;
