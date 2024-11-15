import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SPACECRAFTCOMPONENT_MODULE_DECLARATIONS, SpacecraftComponentRoutingModule} from  './SpacecraftComponent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SpacecraftComponentRoutingModule
  ],
  declarations: SPACECRAFTCOMPONENT_MODULE_DECLARATIONS,
  exports: SPACECRAFTCOMPONENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpacecraftComponentModule { }