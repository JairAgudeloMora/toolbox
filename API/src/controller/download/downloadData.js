const { fetchCsvFiles } = require('../list/fetchCsvFiles')
const { fetchCsvParsedDataFiles } = require('./parsedAllDataFiles')

const downloadAllFormatedData = async (req, res) => {
  try {
    const { fileName } = req.query

    const totalFiles = await fetchCsvFiles()

    if (totalFiles.length === 0) {
      return res.status(200).json({ message: 'No hay archivos CSV disponibles.' })
    }

    if (fileName) {
      if (!totalFiles.includes(fileName)) {
        return res.status(404).json({ error: `El archivo ${fileName} no fue encontrado.` })
      }

      const fileData = await fetchCsvParsedDataFiles(fileName)
      return res.status(200).json({
        file: fileData?.file,
        lines: fileData?.lines,
      })
    }

    const parsedDataResults = await Promise.all(
      totalFiles.map(file => fetchCsvParsedDataFiles(file))
    )

    res.status(200).json(parsedDataResults)
  } catch (error) {
    console.error('Error en downloadAllFormatedData:', error)
    res.status(500).json({ error: 'Failed to get all data on CSV files' })
  }
}

module.exports = { downloadAllFormatedData }
