import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MISSIONSUMMARY_MODULE_DECLARATIONS, MissionSummaryRoutingModule} from  './MissionSummary-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MissionSummaryRoutingModule
  ],
  declarations: MISSIONSUMMARY_MODULE_DECLARATIONS,
  exports: MISSIONSUMMARY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MissionSummaryModule { }