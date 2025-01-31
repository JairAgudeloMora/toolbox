const https = require('https')
const parseCsv = require('../../utils/parseCsv')

const fetchCsvParsedDataFiles = async (filename) => {
  const options = {
    hostname: 'echo-serv.tbxnet.com',
    path: `/v1/secret/file/${filename}`,
    method: 'GET',
    headers: { Authorization: 'Bearer aSuperSecretKey' }
  }

  return new Promise((resolve, reject) => {
    https.get(options, (response) => {
      const data = []

      response.on('data', (chunk) => data.push(chunk))
      response.on('end', () => {
        try {
          const result = parseCsv(Buffer.concat(data).toString(), filename)
          resolve(result)
        } catch (error) {
          reject(new Error('Failed to parse CSV: ' + error.message))
        }
      })
    }).on('error', (error) => reject(new Error('Request failed: ' + error.message)))
  })
}

module.exports = { fetchCsvParsedDataFiles }
