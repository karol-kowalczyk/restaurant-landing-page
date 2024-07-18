import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from "./menu/menu.component";
import { OrderComponent } from "./order/order.component";
import { LocationComponent } from "./location/location.component";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent, MenuComponent, OrderComponent, LocationComponent],
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {

}