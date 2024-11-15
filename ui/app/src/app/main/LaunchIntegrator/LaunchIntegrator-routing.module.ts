import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchIntegratorHomeComponent } from './home/LaunchIntegrator-home.component';
import { LaunchIntegratorNewComponent } from './new/LaunchIntegrator-new.component';
import { LaunchIntegratorDetailComponent } from './detail/LaunchIntegrator-detail.component';

const routes: Routes = [
  {path: '', component: LaunchIntegratorHomeComponent},
  { path: 'new', component: LaunchIntegratorNewComponent },
  { path: ':id', component: LaunchIntegratorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LaunchIntegrator-detail-permissions'
      }
    }
  }
];

export const LAUNCHINTEGRATOR_MODULE_DECLARATIONS = [
    LaunchIntegratorHomeComponent,
    LaunchIntegratorNewComponent,
    LaunchIntegratorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchIntegratorRoutingModule { }