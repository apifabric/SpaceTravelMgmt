import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionTypeHomeComponent } from './home/MissionType-home.component';
import { MissionTypeNewComponent } from './new/MissionType-new.component';
import { MissionTypeDetailComponent } from './detail/MissionType-detail.component';

const routes: Routes = [
  {path: '', component: MissionTypeHomeComponent},
  { path: 'new', component: MissionTypeNewComponent },
  { path: ':id', component: MissionTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MissionType-detail-permissions'
      }
    }
  }
];

export const MISSIONTYPE_MODULE_DECLARATIONS = [
    MissionTypeHomeComponent,
    MissionTypeNewComponent,
    MissionTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionTypeRoutingModule { }