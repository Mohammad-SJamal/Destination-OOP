const Airport = require("./../../classes/Airport");

describe("Airport Class", () => {
  let airport = new Airport("JFK", "JFK", "LAX123", "NW123", []);

  //test name is a string
  test("name is a string", () => {
    expect(airport.name).toBe("JFK");
  });

  //test planes is an empty array
  test("planes is initialized as a empty array", () => {
    expect(airport._planes).toEqual([]);
  });

  //test planes is a private array
  test("planes is a private array", () => {
    expect(airport._planes).toBeUndefined;
  });

  //test airportCode is a string
  test("airportCode is a string", () => {
    expect(airport.airportCode).toBe("JFK");
  });

  //test getPlanes() returns the planes array
  test("getPlanes() returns the planes array", () => {
    airport.addPlane("Plane1", "Plane2", "Plane3", "Plane4");
    expect(airport.getPlanes()).toEqual([
      "Plane1",
      "Plane2",
      "Plane3",
      "Plane4",
    ]);
  });

  //test addPlane() adds a plane to the planes array
  test("addPlane() adds a plane to the planes array", () => {
    airport.addPlane("Plane5");
    expect(airport.getPlanes()).toEqual([
      "Plane1",
      "Plane2",
      "Plane3",
      "Plane4",
      "Plane5",
    ]);
  });
});
