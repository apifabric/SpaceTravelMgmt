import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AstronautBiography-card.component.html',
  styleUrls: ['./AstronautBiography-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AstronautBiography-card]': 'true'
  }
})

export class AstronautBiographyCardComponent {


}