const request = require('supertest');
const app = require('./index');

describe('root path', () => {
  test('responds with status 200 the GET method', () => request(app)
    .get('/')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));
});

describe('response is a five letter word', () => {
  test('responds with status 200 the GET method', () => request(app)
    .get('/')
    .then((res) => {
      expect(res.text.length).toBe(5);
    }));
});
