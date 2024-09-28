import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../Shared Module/MyData';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() car!: Car;
}
