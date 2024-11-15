import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LAUNCH_MODULE_DECLARATIONS, LaunchRoutingModule} from  './Launch-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LaunchRoutingModule
  ],
  declarations: LAUNCH_MODULE_DECLARATIONS,
  exports: LAUNCH_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LaunchModule { }