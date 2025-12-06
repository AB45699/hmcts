const request = require("supertest"); 
const app = require("../app.js"); 
const db = require("../database/connection.js");

afterAll(()=> {
    db.end();
});

describe("app", ()=> {
    test("invalid path returns a 404 status code and error message", async ()=> {
        const {body} = await request(app).get("/api/invalid").expect(404);

        expect(body.msg).toBe("Path not found");
    })
    describe("GET /api/cases", ()=> {
        test("returns a status code of 200", async ()=> {
            await request(app).get("/api/cases").expect(200);
        });
        test("responds with an array on the key of 'cases'", async ()=> {
            const {body} = await request(app).get("/api/cases"); 

            expect(Array.isArray(body.cases)).toBe(true); 
        });
        test("array length is 2, to reflect the number of test cases data", async ()=> {
            const {body} = await request(app).get("/api/cases"); 

            expect(body.cases.length).toBe(2);
        });
        test("each test case item is an object", async ()=> {
            const {body} = await request(app).get("/api/cases"); 

            body.cases.forEach((testCase)=>{
                expect(typeof testCase).toBe("object"); 
                expect(Array.isArray(testCase)).toBe(false); 
            })
        }); 
        test("each test case item has keys of case_id, case_number, case_title, case_description, case_status, and due", async () => {
            const {body} = await request(app).get("/api/cases"); 

            body.cases.forEach((testCase)=>{ 
                expect(testCase).toHaveProperty("case_id");
                expect(testCase).toHaveProperty("case_number");
                expect(testCase).toHaveProperty("case_title");
                expect(testCase).toHaveProperty("case_description");
                expect(testCase).toHaveProperty("case_status");
                expect(testCase).toHaveProperty("due");
            })
        });
        test("the test case items are in descending order of creation (i.e. case_id)", async ()=>{
            const {body} = await request(app).get("/api/cases"); 

            expect(body.cases).toBeSortedBy("case_id", {descending: true});
        })
    })
})