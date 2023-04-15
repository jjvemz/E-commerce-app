const request = require("supertest");
const app = require("../server");
const { Tag } = require("../models");

describe("Tags GET API ", ()=>{
    it("Should return a 200 status code for the GET request", async()=>{
        const res = await request(app)
        .get("/api/v1/tags")
        .send();
        expect(res.status).toBe(200)
    })
    afterAll(async () => {
        await Tag.destroy({ where: {} });
      });
})