const request = require("supertest"); 
const app = require("../app.js"); 

describe("app", ()=> {
    describe("GET /api/cases", ()=> {
        test("returns a status code of 200", async ()=> {
            await request(app).get("/api/cases").expect(200);
        });
    })
})