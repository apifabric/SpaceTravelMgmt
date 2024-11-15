import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASTRONAUTRANK_MODULE_DECLARATIONS, AstronautRankRoutingModule} from  './AstronautRank-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AstronautRankRoutingModule
  ],
  declarations: ASTRONAUTRANK_MODULE_DECLARATIONS,
  exports: ASTRONAUTRANK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AstronautRankModule { }