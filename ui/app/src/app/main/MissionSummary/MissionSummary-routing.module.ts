import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionSummaryHomeComponent } from './home/MissionSummary-home.component';
import { MissionSummaryNewComponent } from './new/MissionSummary-new.component';
import { MissionSummaryDetailComponent } from './detail/MissionSummary-detail.component';

const routes: Routes = [
  {path: '', component: MissionSummaryHomeComponent},
  { path: 'new', component: MissionSummaryNewComponent },
  { path: ':id', component: MissionSummaryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MissionSummary-detail-permissions'
      }
    }
  }
];

export const MISSIONSUMMARY_MODULE_DECLARATIONS = [
    MissionSummaryHomeComponent,
    MissionSummaryNewComponent,
    MissionSummaryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionSummaryRoutingModule { }