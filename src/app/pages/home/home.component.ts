import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardsComponent } from "../../components/cards/cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,  NavbarComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
