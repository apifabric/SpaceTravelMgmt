import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Launch-card.component.html',
  styleUrls: ['./Launch-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Launch-card]': 'true'
  }
})

export class LaunchCardComponent {


}