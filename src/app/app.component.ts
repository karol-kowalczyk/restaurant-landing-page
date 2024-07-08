import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, OrderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sakura Ramen';
  ngOnInit(): void {
    console.log('servus');
  }

}
