import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  titles = [
    { title: 'Tonkotsu Ramen'},
    { title: 'Spicy Miso Ramen'},
    { title: 'Shio Ramen'}
  ]
  offerClasses = [
    { class: 'first-offer', name: 'CHICKEN', price:'11.95€' },
    { class: 'second-offer', name: 'BEEF', price:'12.95€' },
    { class: 'third-offer', name: 'SHRIMP', price:'13.95€' }
  ]
  img = [
    {src: 'assets/img/3_section_our_menu/Png/R1.png'},
    {src: 'assets/img/3_section_our_menu/Png/R2.png'},
    {src: 'assets/img/3_section_our_menu/Png/R3.png'}
  ]
}
