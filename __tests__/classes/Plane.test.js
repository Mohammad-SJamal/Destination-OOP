const Plane = require("../../classes/Plane.js");
const Airport = require("../../classes/Airport.js");

describe("Plane", () => {
  it("tests initialization of components of Plane class", () => {
    const plane = new Plane("Delta Airlines", "JFK");
    expect(plane.company).toBe("Delta Airlines");
    expect(plane.origin).toBe(Airport.airportCode);
    expect(plane.destination).toBe("JFK");
    expect(plane.passengers).toEqual([]);
  });

  it("tests getPassengers method of Plane class", () => {
    const plane = new Plane("Delta Airlines", "JFK");
    plane.addPassenger("John Doe");
    plane.addPassenger("Jane Doe");
    expect(plane.getPassengers()).toEqual(["John Doe", "Jane Doe"]);
  });

  it("tests addPassenger method of Plane class", () => {
    const plane = new Plane("Delta Airlines", "JFK");
    plane.addPassenger("John Doe");
    expect(plane.passengers).toEqual(["John Doe"]);
  });
});
