import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../Shared Module/MyData';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
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
}
