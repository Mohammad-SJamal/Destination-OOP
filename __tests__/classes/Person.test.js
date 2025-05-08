const Person = require('../../classes/Person')
const Bag = require('../../classes/Bag')

let testPerson = new Person("John", "Hyderabad");

describe("Testing person init", () => {
    test("Testing if can create instance of Person class", () => {
        expect(testPerson).toBeInstanceOf(Person);
    })

    test("Testing if name and destination have been assigned correctly", () => {
        expect(testPerson.name).toBe("John");
        expect(testPerson.destination).toBe("Hyderabad");
    })

    test("Testing that bags initializes as an empty array", () => {
        expect(testPerson.getBags()).toEqual([]);
    })

    test("Testing if getBags() method works properly", () => {
        let testBag = new Bag(25, 123456); //modeled on Bag(weight, id)
        testPerson.addBag(testBag);
        let testArray = []; testArray.push(testBag); //creating and pushing into test array a bag to match expectwed output.
        expect(testPerson.getBags()).toEqual(testArray);
    })
})