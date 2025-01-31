const chai = require('chai')
const chaiHttp = require('chai-http')
const { fetchCsvParsedDataFiles } = require('./parsedAllDataFiles')
const parseCsv = require('../../utils/parseCsv')

chai.use(chaiHttp)
const expect = chai.expect

describe('fetchCsvParsedDataFiles', () => {
  it('should fetch and parse CSV data successfully', async () => {
    const filename = 'test1.csv'
    const parsedData = await fetchCsvParsedDataFiles(filename)
    expect(parsedData).to.be.an('object')
  })

  it('should handle CSV parsing errors', async () => {
    const filename = 'invalid.csv'
    try {
      await fetchCsvParsedDataFiles(filename)
    } catch (error) {
      expect(error.message).to.include('Failed to parse CSV')
    }
  })

  it('should handle request errors', async () => {
    const filename = 'nonexistent.csv'
    try {
      await fetchCsvParsedDataFiles(filename)
    } catch (error) {
      expect(error.message).to.include('Request failed')
    }
  })
})