// // Complete the js code
// function Car(make, model) {}

// function SportsCar(make, model, topSpeed) {}

// // Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;

// Complete the js code

// Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
  // Inherit make and model from Car
  Car.call(this, make, model);

  // Add topSpeed property
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Correct the constructor reference
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;








