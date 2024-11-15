import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceSectorHomeComponent } from './home/SpaceSector-home.component';
import { SpaceSectorNewComponent } from './new/SpaceSector-new.component';
import { SpaceSectorDetailComponent } from './detail/SpaceSector-detail.component';

const routes: Routes = [
  {path: '', component: SpaceSectorHomeComponent},
  { path: 'new', component: SpaceSectorNewComponent },
  { path: ':id', component: SpaceSectorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SpaceSector-detail-permissions'
      }
    }
  }
];

export const SPACESECTOR_MODULE_DECLARATIONS = [
    SpaceSectorHomeComponent,
    SpaceSectorNewComponent,
    SpaceSectorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceSectorRoutingModule { }