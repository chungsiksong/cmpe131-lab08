const chai = require('chai');
const chaiHttp = require('chai-http'); // Import chai-http
const expect = chai.expect;
const app = require('../app'); // Import the app from app.js

// Tell chai to use the chai-http plugin
chai.use(chaiHttp);

describe('Simple Web App Tests', () => {

  // We don't need after() because chai-http manages the server

  it('should return a 200 status code', (done) => {
    chai.request(app) // Pass the app to chai.request
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should contain "Welcome" in the body', (done) => {
    chai.request(app) // Pass the app
      .get('/')
      .end((err, res) => {
        expect(res.text).to.include('Welcome'); // Use res.text
        done();
      });
  });
});