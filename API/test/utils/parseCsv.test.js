// test/utils/parseCsv.test.js
const parseCsv = require('../../src/utils/parseCsv')
const { expect } = require('chai')

describe('parseCsv', () => {
  it('should handle csvData as an array', () => {
    const csvData = ['file1,text1,10,abc123', 'file2,text2,20,def456']
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.deep.equal([
      { text: 'text1', number: 10, hex: 'abc123' },
      { text: 'text2', number: 20, hex: 'def456' }
    ])
    expect(result.errors).to.be.null
  })

  it('should handle csvData as a string', () => {
    const csvData = 'file1,text1,10,abc123\nfile2,text2,20,def456'
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.deep.equal([
      { text: 'text1', number: 10, hex: 'abc123' },
      { text: 'text2', number: 20, hex: 'def456' }
    ])
    expect(result.errors).to.be.null
  })

  it('should return valid lines when CSV data is correct', () => {
    const csvData = `file1,text1,10,abc123
    file2,text2,20,def456`
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.be.an('array').that.has.lengthOf(2)
    expect(result.lines[0]).to.deep.equal({ text: 'text1', number: 10, hex: 'abc123' })
    expect(result.lines[1]).to.deep.equal({ text: 'text2', number: 20, hex: 'def456' })
    expect(result.errors).to.be.null
  })

  it('should return an error when a column has an invalid value', () => {
    const csvData = `file1,text1,abc,abc123
    file2,text2,20,def456`
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.be.an('array').that.has.lengthOf(1)
    expect(result.errors).to.include('Line 1: Invalid number format')
  })

  it('should handle an empty CSV file', () => {
    const csvData = ''
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.equal('El archivo no posee lineas validas')
    expect(result.errors).to.be.null
  })

  it('should handle a CSV file with only empty lines', () => {
    const csvData = '\n\n\n'
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.equal('El archivo no posee lineas validas')
    expect(result.errors).to.be.null
  })

  it('should return an error when a line has missing columns (with array data)', () => {
    const csvData = ['file1,text1,10', 'file2,,20,def456']
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.equal('El archivo no posee lineas validas')
    expect(result.errors).to.include('Line 1: Missing required columns')
  })

  it('should return an error when a line has missing columns (with string data)', () => {
    const csvData = 'file1,text1,10\nfile2,,20,def456'
    const result = parseCsv(csvData, 'test.csv')

    expect(result.file).to.equal('test.csv')
    expect(result.lines).to.equal('El archivo no posee lineas validas')
    expect(result.errors).to.include('Line 1: Missing required columns')
  })
})
