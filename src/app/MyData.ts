export interface Car {
  id: number;                  // unique ID of the car
  madeBy: string;              // The manufacturer of the car (e.g., KIA)
  model: string;               // Model of the car.
  year: number;                // Year the car was manufactured
  color?: string;              // Color of Car            --- Optional
}
const myCar: Car = {
  id: 1,
  madeBy: 'KIA',
  model: 'Sports',
  year: 2022,
  color: 'Blue',
};

const anotherCar: Car = {
  id: 2,
  madeBy: 'Toyota',
  model: 'Corolla',
  year: 2021,

};

console.log('My Car:', myCar);
console.log('Another Car:',anotherCar);
