'use strict';


// declare base class Vehicle
class Vehicle {

	constructor( distance, travelTime) {
		this.distance = distance;
		this.travelTime = travelTime;
	}// end of constructor

	getSpeed(distance, travelTime) {
		return (this.distance / this.travelTime);
	}// end of getSpeed

}// end of Vehicle class


// Car class inherits from Vehicle class
class Car extends Vehicle {

	constructor(model, fuel) {
		super();
		this.model = model;
		this.fuel = fuel;
	}// end of constructor

	refuel() {
		if (this.fuel < 100) {
			return 'time to refuel';
		}
		return 'you have enough fuel';
		
	}// end of refuel function

}
