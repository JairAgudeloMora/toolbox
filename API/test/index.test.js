const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)
const expect = chai.expect

describe('Server', () => {
  it('should be running on the correct port', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })

  after(() => {
    server.close()
  })
})
