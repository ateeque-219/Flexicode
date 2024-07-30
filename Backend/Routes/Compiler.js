const express = require('express')
const {compile} = require('../Controller/CompilerCode')
const router = express.Router()
router.route('/').post(compile);

module.exports = router