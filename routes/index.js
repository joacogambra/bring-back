let router = require('express').Router()

let user = require('./user')
// let rutines = require('./rutines')

router.use('/user', user)
// router.use('/rutines', rutines)

module.exports = router;
