import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SpaceSector-new',
  templateUrl: './SpaceSector-new.component.html',
  styleUrls: ['./SpaceSector-new.component.scss']
})
export class SpaceSectorNewComponent {
  @ViewChild("SpaceSectorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}