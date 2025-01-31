// src/routes/index.js
const express = require('express')
const router = express.Router()

// Importar el controlador
const { getCsvFiles } = require('../../controller/list/listController')

// Definir la ruta que usa el controlador
router.get('/list', getCsvFiles)

module.exports = router
