import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MissionSummary-card.component.html',
  styleUrls: ['./MissionSummary-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MissionSummary-card]': 'true'
  }
})

export class MissionSummaryCardComponent {


}