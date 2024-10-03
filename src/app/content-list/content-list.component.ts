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

}
