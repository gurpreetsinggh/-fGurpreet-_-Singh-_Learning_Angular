import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './Shared Module/MyData';
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import {CarDetails} from "./Shared Module/carDetails";
import {CarServiceService} from "./services/car-service.service";
import {NgStyle} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gurpreet';
  aboutme = "I like computer programming and music";
  section = "I am in D section";


  cars: Car[] = [
    {
      id: 1,
      madeBy: 'KIA',
      model: 'Sports',
      year: 2022,
      color: 'Blue'
    },
    {
      id: 2,
      madeBy: 'Toyota',
      model: 'Corolla',
      year: 2021,
    },
    {
      id: 3,
      madeBy: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'Red'
    },
    {
      id: 4,
      madeBy: 'Ford',
      model: 'Mustang',
      year: 2023,
      color: 'Black'
    },
    {
      id: 5,
      madeBy: 'Chevrolet',
      model: 'Malibu',
      year: 2021,
    },
    {
      id: 6,
      madeBy: 'Nissan',
      model: 'Altima',
      year: 2022,
      color: 'Silver'
    },
  ];
  superCar: CarDetails | undefined;


  constructor(private carService: CarServiceService) {

  }

  ngOnInit() {
    this.carService.getcarById(1).subscribe({
      next: data => this.superCar = data,
      error: err => console.error("Error fetching Super Car", err),
      complete: () => console.log("Super Car data fetch complete!")
  })
  }
}
