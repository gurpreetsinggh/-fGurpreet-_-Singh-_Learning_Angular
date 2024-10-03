import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../Shared Module/MyData';
import {CarDetails} from "../Shared Module/carDetails";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {CarServiceService} from "../services/car-service.service";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
cars : CarDetails[] = [];

constructor(private carService : CarServiceService) {

}

ngOnInit(){
  this.carService.getCar().subscribe({
    next: (data:CarDetails[]) => this.cars = data,
    error:err => console.error("Error fetching Cars", err),
    complete:() => console.log("Cars data fetch complete!")
  })
}
}
