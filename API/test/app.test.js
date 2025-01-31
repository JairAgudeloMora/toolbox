const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/app')

chai.use(chaiHttp)
const expect = chai.expect

describe('App', () => {
  it('should return a 200 status for the root route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })

  it('should return a 404 status for unknown routes', (done) => {
    chai.request(app)
      .get('/unknown')
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })
})
