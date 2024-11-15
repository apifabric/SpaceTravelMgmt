import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SpacecraftComponent-new',
  templateUrl: './SpacecraftComponent-new.component.html',
  styleUrls: ['./SpacecraftComponent-new.component.scss']
})
export class SpacecraftComponentNewComponent {
  @ViewChild("SpacecraftComponentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}