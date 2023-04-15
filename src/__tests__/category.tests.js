const request = require("supertest");
const app = require("../server");
const { Category } = require("../models");

describe("Category API GET", () => {
  it("Should return a 200 status code for the GET request", async () => {
    const res = await request(app)
      .get("/api/v1/categories")
      .send();
    expect(res.status).toBe(200);
  });

  afterAll(async () => {
    await Category.destroy({ where: {} });
  });
});

describe("Category API POST", () => {
  const newCategory = {
    category_name: "some category",
  };

  it("Should return a 200 status code for the POST request of category", async () => {
    const response = await request(app)
      .post("/api/v1/categories")
      .send(newCategory);

    expect(response.statusCode).toBe(200);
  });

 /* it("Should return a JSON object for for the POST request of category", async () => {
    const response = await request(app)
      .post("localhost:4000/api/v1/categories")
      .set("content-type", "application/json")
      .send(newCategory);

    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });*/

  it("Should return the id of the category", async () =>{
    const response = await request(app)
    .post("localhost:4000/api/v1/categories")
      .set("content-type", "application/json")
      .send(newCategory);

      const categoryId = response.body.id

    const getResponse = await request(app)
    .get(`localhost:4000/api/v1/categories/${categoryId}`);

    expect(getResponse.body.id).toEqual(categoryId)
  });

  it("responds with a 404 when the category does not exist", (done) => {
    request(app)
      .get("/api/v1/categories/&invalid-id")
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  
  /*it("responds with a 500 when an error occurs", (done) => {
  request(app)
    .get("/api/v1/categories/invalid-id")
    .expect(500)
    .end((err, res) => {
      if (err) {
        console.log("Error occurred while making request: ", err);
        return done(err);
      }
      console.log("Response from server: ", res.body);
      done();
    });
});*/


  
});
afterAll(async () => {
  await Category.destroy({ where: {} });
});