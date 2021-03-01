// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js")

describe("Tests", () =>{
    
    it("Should make sure the output is letters", () => {
        expected = caesar("thinkful",3)
        actual = 'wklqnixo'
        expect(expected).to.equal(actual)
    })


    it("Should check for spaces", () =>{
        expected = caesar("abc abc",1)
        actual = 'bcd bcd'
        expect(expected).to.equal(actual)
    })
})


describe("Downshifts", () => {
    it("should shift backwards"), () => {
        expected = caesar("thinkful", -2)
        actual = 'sghmjeti'
        expect(expected).to.equal(actual)
    }

})
   



