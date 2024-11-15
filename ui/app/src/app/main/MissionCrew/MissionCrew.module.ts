import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MISSIONCREW_MODULE_DECLARATIONS, MissionCrewRoutingModule} from  './MissionCrew-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MissionCrewRoutingModule
  ],
  declarations: MISSIONCREW_MODULE_DECLARATIONS,
  exports: MISSIONCREW_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MissionCrewModule { }