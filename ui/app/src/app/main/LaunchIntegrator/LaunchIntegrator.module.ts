import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LAUNCHINTEGRATOR_MODULE_DECLARATIONS, LaunchIntegratorRoutingModule} from  './LaunchIntegrator-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LaunchIntegratorRoutingModule
  ],
  declarations: LAUNCHINTEGRATOR_MODULE_DECLARATIONS,
  exports: LAUNCHINTEGRATOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LaunchIntegratorModule { }