import { Injectable } from '@angular/core';
import {CarDetails} from "../Shared Module/carDetails";
import {carDetails} from "../../Data/mock-content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private cars: CarDetails[] = carDetails;
  constructor() {
  }

  getCar(): Observable<CarDetails[]> {
    return of(carDetails);
  }

  addCar(newCar: CarDetails): Observable<CarDetails[]> {
    this.cars.push(newCar)
    return of(this.cars);

  }

  getcarById(carId: number): Observable<CarDetails | undefined> {
  const car = this.cars.find(car => car.car.id === carId);
  return of(car);


}

updatecar(updatedcar: CarDetails): Observable<CarDetails[]> {
  const index = this.cars.findIndex(car => car.car.id === updatedcar.car.id);
  if (index !== -1) {
  this.cars[index] = updatedcar;
}
return of(this.cars);


}

deleteCar(carId: number): Observable<CarDetails[]> {
  this.cars = this.cars.filter(car => car.car.id !== car.car.id);
  return of(this.cars);
}


}
