const request = require("supertest");
const app = require("../server");
const { Category } = require("../models");

describe("Category API GET", () => {
  // Tests that the function creates a category with valid data. tags: [happy path]
  it("Should return  a 200 status code for the GET request", async() =>{
    const res = await request(app)
    .get("localhost:4000/api/v1/categories")
    .send();
    expect(res.status).toBe(200)
  })


  afterAll(async () => {
    await Category.destroy({ where: {} });
  });
});

describe("Category API GET", () => {
    const newCategory = {
      category_name: "some category"
    };

    it("Should return  a 200 status code for the GET request", async() =>{
      const response = await request(app)
      .post("localhost:4000/api/v1/categories")
      .send(newCategory);

      expect(response.statusCode).toBe(200);
    });

    afterAll(async () => {
      await Category.destroy({ where: {} });
    });
})
