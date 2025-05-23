const Airport = require("./Airport.js");

class Plane {
  constructor(company, destination) {
    this.company = company;
    this.origin = Airport.airportCode;
    this.destination = destination;
    this.passengers = [];
  }

  getPassengers() {
    return this.passengers;
  }

  addPassenger(passenger) {
    this.passengers.push(passenger);
  }
}

module.exports = Plane;
