const { fetchCsvFiles } = require('./fetchCsvFiles')

const getCsvFiles = async (req, res) => {
  try {
    const files = await fetchCsvFiles()
    res.status(200).json({ files })
  } catch (error) {
    res.status(500).json({ error: `Error get the list .csv files: ${error}` })
  }
}

module.exports = { getCsvFiles }
