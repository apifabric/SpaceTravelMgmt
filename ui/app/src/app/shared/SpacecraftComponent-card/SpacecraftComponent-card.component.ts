import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SpacecraftComponent-card.component.html',
  styleUrls: ['./SpacecraftComponent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SpacecraftComponent-card]': 'true'
  }
})

export class SpacecraftComponentCardComponent {


}