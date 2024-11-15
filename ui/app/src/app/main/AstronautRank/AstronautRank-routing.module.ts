import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautRankHomeComponent } from './home/AstronautRank-home.component';
import { AstronautRankNewComponent } from './new/AstronautRank-new.component';
import { AstronautRankDetailComponent } from './detail/AstronautRank-detail.component';

const routes: Routes = [
  {path: '', component: AstronautRankHomeComponent},
  { path: 'new', component: AstronautRankNewComponent },
  { path: ':id', component: AstronautRankDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AstronautRank-detail-permissions'
      }
    }
  }
];

export const ASTRONAUTRANK_MODULE_DECLARATIONS = [
    AstronautRankHomeComponent,
    AstronautRankNewComponent,
    AstronautRankDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautRankRoutingModule { }