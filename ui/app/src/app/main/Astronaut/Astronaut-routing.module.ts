import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautHomeComponent } from './home/Astronaut-home.component';
import { AstronautNewComponent } from './new/Astronaut-new.component';
import { AstronautDetailComponent } from './detail/Astronaut-detail.component';

const routes: Routes = [
  {path: '', component: AstronautHomeComponent},
  { path: 'new', component: AstronautNewComponent },
  { path: ':id', component: AstronautDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Astronaut-detail-permissions'
      }
    }
  },{
    path: ':astronaut_id/AstronautBiography', loadChildren: () => import('../AstronautBiography/AstronautBiography.module').then(m => m.AstronautBiographyModule),
    data: {
        oPermission: {
            permissionId: 'AstronautBiography-detail-permissions'
        }
    }
},{
    path: ':astronaut_id/AstronautRank', loadChildren: () => import('../AstronautRank/AstronautRank.module').then(m => m.AstronautRankModule),
    data: {
        oPermission: {
            permissionId: 'AstronautRank-detail-permissions'
        }
    }
},{
    path: ':astronaut_id/MissionCrew', loadChildren: () => import('../MissionCrew/MissionCrew.module').then(m => m.MissionCrewModule),
    data: {
        oPermission: {
            permissionId: 'MissionCrew-detail-permissions'
        }
    }
}
];

export const ASTRONAUT_MODULE_DECLARATIONS = [
    AstronautHomeComponent,
    AstronautNewComponent,
    AstronautDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautRoutingModule { }