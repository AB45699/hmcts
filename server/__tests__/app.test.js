const request = require("supertest"); 
const app = require("../app.js"); 
const db = require("../database/connection.js");

afterAll(()=> {
    db.end();
});

describe("app", ()=> {
    describe("GET /api/cases", ()=> {
        test("returns a status code of 200", async ()=> {
            await request(app).get("/api/cases").expect(200);
        });
        test("responds with an array on the key of 'cases'", async ()=> {
            const {body} = await request(app).get("/api/cases"); 

            expect(Array.isArray(body.cases)).toBe(true); 
        })
    })
})