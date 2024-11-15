import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LaunchIntegrator-new',
  templateUrl: './LaunchIntegrator-new.component.html',
  styleUrls: ['./LaunchIntegrator-new.component.scss']
})
export class LaunchIntegratorNewComponent {
  @ViewChild("LaunchIntegratorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}