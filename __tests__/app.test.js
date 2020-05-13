const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('lab38-be routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
});
