import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../Shared Module/MyData';
import {CarDetails} from "../Shared Module/carDetails";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  cars: Car[] = [
    { id: 1, madeBy: 'KIA', model: 'Sports', year: 2022, color: 'Blue' },
    { id: 2, madeBy: 'Toyota', model: 'Corolla', year: 2021 },
    { id: 3, madeBy: 'Honda', model: 'Civic', year: 2020, color: 'Black' },
    { id: 4, madeBy: 'Ford', model: 'Focus', year: 2019 },
  ];

  carDetails: CarDetails[] = [
    {car: this.cars[0],milesRun:20000,secondHand:true},
    {car: this.cars[1],milesRun:0,secondHand:false},
    {car: this.cars[2],milesRun:10000,secondHand:true},
    {car: this.cars[3],milesRun:0,secondHand:false}
  ]
}
