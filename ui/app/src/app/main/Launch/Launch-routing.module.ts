import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchHomeComponent } from './home/Launch-home.component';
import { LaunchNewComponent } from './new/Launch-new.component';
import { LaunchDetailComponent } from './detail/Launch-detail.component';

const routes: Routes = [
  {path: '', component: LaunchHomeComponent},
  { path: 'new', component: LaunchNewComponent },
  { path: ':id', component: LaunchDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Launch-detail-permissions'
      }
    }
  },{
    path: ':launch_id/Astronaut', loadChildren: () => import('../Astronaut/Astronaut.module').then(m => m.AstronautModule),
    data: {
        oPermission: {
            permissionId: 'Astronaut-detail-permissions'
        }
    }
},{
    path: ':assigned_launch_id/LaunchIntegrator', loadChildren: () => import('../LaunchIntegrator/LaunchIntegrator.module').then(m => m.LaunchIntegratorModule),
    data: {
        oPermission: {
            permissionId: 'LaunchIntegrator-detail-permissions'
        }
    }
}
];

export const LAUNCH_MODULE_DECLARATIONS = [
    LaunchHomeComponent,
    LaunchNewComponent,
    LaunchDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule { }