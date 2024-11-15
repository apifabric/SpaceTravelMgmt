import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LaunchIntegrator-card.component.html',
  styleUrls: ['./LaunchIntegrator-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LaunchIntegrator-card]': 'true'
  }
})

export class LaunchIntegratorCardComponent {


}