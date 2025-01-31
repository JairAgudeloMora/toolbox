
const parseCsv = (csvData, filename) => {
  const lines = Array.isArray(csvData) ? csvData : csvData.split('\n')
  const validLines = []
  const errors = []

  lines.forEach((line, index) => {
    if (!line.trim()) {
      return
    }
    const columns = line.split(',')

    if (columns.length < 4) {
      errors.push(`Line ${index + 1}: Missing required columns`)
      return
    }

    const [file, text, number, hex] = columns
    if (!file || !text || !number || !hex) {
      errors.push(`Line ${index + 1}: Missing value(s) in columns`)
      return
    }

    const numberVal = parseInt(number)
    if (isNaN(numberVal)) {
      errors.push(`Line ${index + 1}: Invalid number format`)
      return
    }

    validLines.push({
      text,
      number: numberVal,
      hex
    })
  })

  return {
    file: filename,
    lines: validLines.length === 0 ? 'El archivo no posee lineas validas' : validLines,
    errors: errors.length > 0 ? errors : null
  }
}

module.exports = parseCsv
