import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MissionCrew-card.component.html',
  styleUrls: ['./MissionCrew-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MissionCrew-card]': 'true'
  }
})

export class MissionCrewCardComponent {


}