const checkValidity = require("./checkValidity.js"); 

describe("checkValidity", ()=>{
    test("returns a boolean", ()=>{
        expect(typeof checkValidity("", "", "", "")).toBe("boolean");  
    });
    test("for all inputs being valid (i.e. non-empty string), should return true", ()=>{
        const input = checkValidity("valid case_number", "valid case_title", "valid case_status", "valid due");
        
        expect(input).toBe(true);
    });
    test("if all inputs are not valid (i.e. empty strings), should return false", ()=>{
        const input = checkValidity("", "", "", "");
        
        expect(input).toBe(false);
    });
    test("if all inputs are not valid (i.e. non-strings), should return false", ()=>{
        const input = checkValidity(123, [], {}, true);
        
        expect(input).toBe(false);
    });
    test("if all inputs are invalid (mix of non-string and empty string) should return false", ()=>{
        const input = checkValidity("", [], {}, "");
        
        expect(input).toBe(false);
    })
    test("if some inputs are not valid, should return false", ()=>{
        const input = checkValidity("valid case_number", [], "", "valid due");
        
        expect(input).toBe(false);
    });

})