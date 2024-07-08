import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, OrderComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  steps = [
    {src:'assets/img/2_section_how_to_order/PNG/broth.png', text: 'Pick<br> your noodle'},
    {src:'assets/img/2_section_how_to_order/PNG/noodle.png', text: 'Pick<br> your broth'},
    {src:'assets/img/2_section_how_to_order/PNG/egg.png', text: 'Add your<br> toppings'}
  ];
}
