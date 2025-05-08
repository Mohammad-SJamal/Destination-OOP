const Bag = require("./../../classes/Bag");
const Person = require("./../../classes/Person");


let testPerson = new Person("John", "Hyderabad");
let testBag = new Bag(25, 12345);

describe("Testing Bag Class", () => {
    test("Testing can create instance of bag class", () => {
        expect(testBag).toBeInstanceOf(Bag);
    })

    test("Testing that weight and id have been assigned correctly", () => {
        expect(testBag.weight).toBe(25);
        expect(testBag.id).toBe(12345);
    })

    test("Testing that owner is initialized as null", () => {
        expect(testBag.getOwner()).toBe(null);
    })

    test("Testing that can verify initial owner with getOwner", () => {
        testBag.assignOwner(testPerson);
        expect(testBag.getOwner()).toBe(testPerson);
    })

    test("Testing that owner can be updated using assignOwner", () => {
        expect(testBag.getOwner()).toBe(testPerson); //before assnmnt
        const newPerson = new Person("Jack", "Mexico");
        testBag.assignOwner(newPerson);
        expect(testBag.getOwner()).toBe(newPerson);
    })
})