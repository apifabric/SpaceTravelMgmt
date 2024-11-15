import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionHomeComponent } from './home/Mission-home.component';
import { MissionNewComponent } from './new/Mission-new.component';
import { MissionDetailComponent } from './detail/Mission-detail.component';

const routes: Routes = [
  {path: '', component: MissionHomeComponent},
  { path: 'new', component: MissionNewComponent },
  { path: ':id', component: MissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Mission-detail-permissions'
      }
    }
  },{
    path: ':mission_id/Launch', loadChildren: () => import('../Launch/Launch.module').then(m => m.LaunchModule),
    data: {
        oPermission: {
            permissionId: 'Launch-detail-permissions'
        }
    }
},{
    path: ':mission_id/MissionCrew', loadChildren: () => import('../MissionCrew/MissionCrew.module').then(m => m.MissionCrewModule),
    data: {
        oPermission: {
            permissionId: 'MissionCrew-detail-permissions'
        }
    }
},{
    path: ':mission_id/MissionSummary', loadChildren: () => import('../MissionSummary/MissionSummary.module').then(m => m.MissionSummaryModule),
    data: {
        oPermission: {
            permissionId: 'MissionSummary-detail-permissions'
        }
    }
},{
    path: ':mission_id/SpaceSector', loadChildren: () => import('../SpaceSector/SpaceSector.module').then(m => m.SpaceSectorModule),
    data: {
        oPermission: {
            permissionId: 'SpaceSector-detail-permissions'
        }
    }
}
];

export const MISSION_MODULE_DECLARATIONS = [
    MissionHomeComponent,
    MissionNewComponent,
    MissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }