const chai = require('chai')
const chaiHttp = require('chai-http')
const { fetchCsvFiles } = require('./fetchCsvFiles')

chai.use(chaiHttp)
const expect = chai.expect

describe('fetchCsvFiles', () => {
  it('should fetch CSV files successfully', async () => {
    const files = await fetchCsvFiles()
    expect(files).to.be.an('array')
    expect(files).to.include('test1.csv')
    expect(files).to.include('test2.csv')
    expect(files).to.include('test3.csv')
    expect(files).to.include('test18.csv')
    expect(files).to.include('test4.csv')
    expect(files).to.include('test5.csv')
    expect(files).to.include('test6.csv')
    expect(files).to.include('test9.csv')
    expect(files).to.include('test15.csv')
  })

  it('should handle JSON parsing errors', async () => {
    try {
      await fetchCsvFiles()
    } catch (error) {
      expect(error.message).to.include('Failed to parse response')
    }
  })

  it('should handle request errors', async () => {
    try {
      await fetchCsvFiles()
    } catch (error) {
      expect(error.message).to.include('Request failed')
    }
  })
})