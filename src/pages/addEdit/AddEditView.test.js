const rewire = require("rewire")
const AddEditView = rewire("./AddEditView")
const test = AddEditView.__get__("test")
// @ponicode
describe("test", () => {
    test("0", () => {
        let callFunction = () => {
            test(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            test(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            test("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            test(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            test("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            test(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
