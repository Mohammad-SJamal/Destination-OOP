class Airport {
  constructor(name, airportCode) {
    this.name = name;
    this.airportCode = airportCode;
    this._planes = []; //private property
  }

  getPlanes() {
    return this._planes; //accessing private property
  }

  addPlane(plane) {
    this._planes.push(plane); //adding a plane to the private array
  }
}

module.exports = Airport;
