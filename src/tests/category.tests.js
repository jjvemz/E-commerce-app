const request = require('supertest');
const app = require('../app');

describe('Category endpoints', () => {
  it('should get all categories', async () => {
    const res = await request(app).get('/categories');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('categories');
  });

  it('should create a new category', async () => {
    const res = await request(app)
      .post('/categories')
      .send({
        name: 'Test Category',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('category');
    expect(res.body.category).toHaveProperty('id');
    expect(res.body.category.name).toEqual('Test Category');
  });

  it('should get a single category', async () => {
    const res = await request(app).get('/categories/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('category');
    expect(res.body.category).toHaveProperty('id');
    expect(res.body.category.id).toEqual(1);
  });

  it('should update a category', async () => {
    const res = await request(app)
      .put('/categories/1')
      .send({
        name: 'Updated Category',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('category');
    expect(res.body.category).toHaveProperty('id');
    expect(res.body.category.name).toEqual('Updated Category');
  });

  it('should delete a category', async () => {
    const res = await request(app).delete('/categories/1');
    expect(res.statusCode).toEqual(204);
  });
});