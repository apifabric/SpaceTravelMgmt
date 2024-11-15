import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AstronautBiography-new',
  templateUrl: './AstronautBiography-new.component.html',
  styleUrls: ['./AstronautBiography-new.component.scss']
})
export class AstronautBiographyNewComponent {
  @ViewChild("AstronautBiographyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}