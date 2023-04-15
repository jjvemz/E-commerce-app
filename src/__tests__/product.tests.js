const request = require("supertest");
const app = require("../server");
const { Product } = require("../models");

describe("Products GET API ", ()=>{
    it("Should return a 200 status code for the GET request", async()=>{
        const res = await request(app)
        .get("/api/v1/products")
        .send();
        expect(res.status).toBe(200)
    })
    afterAll(async () => {
        await Product.destroy({ where: {} });
      });
})