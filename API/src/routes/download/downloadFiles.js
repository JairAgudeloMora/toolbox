const express = require('express')
const router = express.Router()

const { downloadAllFormatedData } = require('../../controller/download/downloadData')

router.get('/data', downloadAllFormatedData)

module.exports = router
