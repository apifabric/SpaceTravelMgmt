import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacecraftComponentHomeComponent } from './home/SpacecraftComponent-home.component';
import { SpacecraftComponentNewComponent } from './new/SpacecraftComponent-new.component';
import { SpacecraftComponentDetailComponent } from './detail/SpacecraftComponent-detail.component';

const routes: Routes = [
  {path: '', component: SpacecraftComponentHomeComponent},
  { path: 'new', component: SpacecraftComponentNewComponent },
  { path: ':id', component: SpacecraftComponentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SpacecraftComponent-detail-permissions'
      }
    }
  }
];

export const SPACECRAFTCOMPONENT_MODULE_DECLARATIONS = [
    SpacecraftComponentHomeComponent,
    SpacecraftComponentNewComponent,
    SpacecraftComponentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacecraftComponentRoutingModule { }