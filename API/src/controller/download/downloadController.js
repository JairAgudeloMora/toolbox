const { fetchCsvParsedDataFiles } = require('./parsedAllDataFiles')

const getCsvFileContent = async (req, res) => {
  const { filename } = req.params
  try {
    const result = await fetchCsvParsedDataFiles(filename)
    res.json({
      file: result?.file,
      lines: result?.lines,
      linesWithError: result?.errors
    })
  } catch (error) {
    console.error('Error processing CSV:', error)
    res.status(500).json({ error: 'Failed to parse all data csv files response' + error })
  }
}

module.exports = { getCsvFileContent }
