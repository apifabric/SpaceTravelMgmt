import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AstronautRank-card.component.html',
  styleUrls: ['./AstronautRank-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AstronautRank-card]': 'true'
  }
})

export class AstronautRankCardComponent {


}