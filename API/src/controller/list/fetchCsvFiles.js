const https = require('https')

const fetchCsvFiles = async () => {
  const options = {
    hostname: 'echo-serv.tbxnet.com',
    path: '/v1/secret/files',
    method: 'GET',
    headers: { Authorization: 'Bearer aSuperSecretKey' }
  }

  return new Promise((resolve, reject) => {
    https.get(options, (response) => {
      const data = []

      response.on('data', (chunk) => data.push(chunk))
      response.on('end', () => {
        try {
          const parsedData = JSON.parse(Buffer.concat(data).toString())
          resolve(parsedData.files?.filter(file => file.endsWith('.csv')) || [])
        } catch (error) {
          reject(new Error('Failed to parse response: ' + error.message))
        }
      })
    }).on('error', (error) => reject(new Error('Request failed: ' + error.message)))
  })
}

module.exports = { fetchCsvFiles }
