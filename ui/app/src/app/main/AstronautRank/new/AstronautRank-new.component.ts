import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AstronautRank-new',
  templateUrl: './AstronautRank-new.component.html',
  styleUrls: ['./AstronautRank-new.component.scss']
})
export class AstronautRankNewComponent {
  @ViewChild("AstronautRankForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}