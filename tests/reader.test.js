const { describe, before, beforeEach, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const { Reader } = require('../src/models');
const app = require('../src/app');
describe;
describe('/readers', () => {
  before(async () => await Reader.sequelize.sync({ force: true }));

  beforeEach(async () => {
    await Reader.destroy({ where: {} });
  });

  describe('with no records in the database', () => {
    describe('POST /readers', () => {
      it('creates a new reader in the database', async () => {
        const response = await request(app).post('/readers').send({
          name: 'Elizabeth Bennet',
          email: 'future_ms_darcy@gmail.com',
        });

        expect(response.status).to.equal(201);
      });
    });
  });
});
