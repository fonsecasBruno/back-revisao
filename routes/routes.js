const express = require('express');
const router = express.Router()

const revisao = require('./revisao')

router.use('/revisao', revisao)

module.exports = router