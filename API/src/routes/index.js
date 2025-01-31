const express = require('express')
const router = express.Router()
const secretsList = require('./list/listRoute')
const allData = require('./download/downloadFiles')

router.use('/files', secretsList)
router.use('/files', allData)

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the toolbox API!' })
})

module.exports = router
