import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SpaceSector-card.component.html',
  styleUrls: ['./SpaceSector-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SpaceSector-card]': 'true'
  }
})

export class SpaceSectorCardComponent {


}