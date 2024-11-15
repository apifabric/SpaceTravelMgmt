import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MissionType-card.component.html',
  styleUrls: ['./MissionType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MissionType-card]': 'true'
  }
})

export class MissionTypeCardComponent {


}