const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const Todo = require('../lib/models/Todo');
const connect = require('../lib/utils/connect');
  
describe('lab38-be Routes', () => {
  beforeAll(() => {
    connect();
  });
    
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
    
  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('creates a Todo via post', () => {
    return request(app)
      .post('/api/v1/todos')
      .send({
        title: 'finish your labs',
        description: 'lab29/34',
        target: 'are you close?'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'finish your labs',
          description: 'lab29/34',
          target: 'are you close?',
          completed: false,
          __v: 0
        });
      });
  });
  
  it('gets a list of Todos via GET', async() => {
    await Todo.create({
      title: 'finish your labs',
      description: 'lab29/34',
      target: 'are you close?'
    });

    return request(app)
      .get('/api/v1/todos')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          title: 'finish your labs',
          description: 'lab29/34',
          target: 'are you close?',
          completed: false,
          __v: 0
        }]);
      });
  });
});
