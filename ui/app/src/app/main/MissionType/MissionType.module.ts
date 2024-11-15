import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MISSIONTYPE_MODULE_DECLARATIONS, MissionTypeRoutingModule} from  './MissionType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MissionTypeRoutingModule
  ],
  declarations: MISSIONTYPE_MODULE_DECLARATIONS,
  exports: MISSIONTYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MissionTypeModule { }