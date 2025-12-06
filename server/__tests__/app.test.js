const request = require("supertest"); 
const app = require("../app.js"); 
const db = require("../database/connection.js");
const seed = require("../database/seed.js");
const testCasesData = require("../database/data/test-case-data.json");

beforeEach( async ()=> {
    await seed(testCasesData);
})

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
    });
    describe("POST /api/cases", ()=> {
        test("returns a status code of 201", async () => {
            const testPostCase = {
                case_number: "Case 3", 
                case_title: "Case 3 title", 
                case_description: "Case 3 description", 
                case_status: "Completed", 
                due: "2025-03-20 17:45:00"
            };

            await request(app).post("/api/cases").send(testPostCase).expect(201);
        });
        test("returns a newly inserted case, with a new case_id, and case number, title, description, status and due keys", async ()=> {
            const testPostCase = {
                case_number: "Case 3", 
                case_title: "Case 3 title", 
                case_description: "Case 3 description", 
                case_status: "Completed", 
                due: "2025-03-20 17:45:00"
            };

            const {body} = await request(app).post("/api/cases").send(testPostCase).expect(201);

            expect(body.postedCase.case_id).toBe(3); 
            expect(body.postedCase.case_number).toBe("Case 3"); 
            expect(body.postedCase.case_title).toBe("Case 3 title"); 
            expect(body.postedCase.case_description).toBe("Case 3 description");
            expect(body.postedCase.case_status).toBe("Completed");
            expect(body.postedCase.due).toBe("2025-03-20T17:45:00.000Z");

        });
        test("cases should post when description key (optional) is an empty string", async ()=> {
            const testPostCase = {
                case_number: "Case 3", 
                case_title: "Case 3 title", 
                case_description: "", 
                case_status: "Completed", 
                due: "2025-03-20 17:45:00"
            };
            const {body} = await request(app).post("/api/cases").send(testPostCase).expect(201);
            
            expect(body.postedCase.case_description).toBe("");
        });
    });
    describe("POST error handling", ()=>{
        const validTestCase = {
            case_number: "Case 3", 
            case_title: "Case 3 title", 
            case_description: "Case 3 description", 
            case_status: "Completed", 
            due: "2025-03-20 17:45:00"
        };

        test.each([
            ["case_number", {...validTestCase, case_number: ""}], 
            ["case_title", {...validTestCase, case_title: ""}],
            ["case_status", {...validTestCase, case_status: ""}],
            ["due", {...validTestCase, due: ""}]
        ])("if the %s key is an empty string, a 400 status code and error message is returned", async (key, invalidTestCase) => {
            const {body} = await request(app).post("/api/cases").send(invalidTestCase).expect(400);

            expect(body.msg).toBe("Bad request");
        })
    })
})