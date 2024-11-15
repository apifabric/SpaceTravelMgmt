import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASTRONAUTBIOGRAPHY_MODULE_DECLARATIONS, AstronautBiographyRoutingModule} from  './AstronautBiography-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AstronautBiographyRoutingModule
  ],
  declarations: ASTRONAUTBIOGRAPHY_MODULE_DECLARATIONS,
  exports: ASTRONAUTBIOGRAPHY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AstronautBiographyModule { }