let router = require('express').Router()

let user = require('./user')
let rutines = require('./rutines')

router.use('/auth', user)
router.use('/rutines', rutines)

module.exports = router;
