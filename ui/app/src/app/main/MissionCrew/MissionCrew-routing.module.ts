import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionCrewHomeComponent } from './home/MissionCrew-home.component';
import { MissionCrewNewComponent } from './new/MissionCrew-new.component';
import { MissionCrewDetailComponent } from './detail/MissionCrew-detail.component';

const routes: Routes = [
  {path: '', component: MissionCrewHomeComponent},
  { path: 'new', component: MissionCrewNewComponent },
  { path: ':id', component: MissionCrewDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MissionCrew-detail-permissions'
      }
    }
  }
];

export const MISSIONCREW_MODULE_DECLARATIONS = [
    MissionCrewHomeComponent,
    MissionCrewNewComponent,
    MissionCrewDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionCrewRoutingModule { }