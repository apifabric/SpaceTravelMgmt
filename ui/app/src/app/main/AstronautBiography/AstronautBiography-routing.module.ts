import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautBiographyHomeComponent } from './home/AstronautBiography-home.component';
import { AstronautBiographyNewComponent } from './new/AstronautBiography-new.component';
import { AstronautBiographyDetailComponent } from './detail/AstronautBiography-detail.component';

const routes: Routes = [
  {path: '', component: AstronautBiographyHomeComponent},
  { path: 'new', component: AstronautBiographyNewComponent },
  { path: ':id', component: AstronautBiographyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AstronautBiography-detail-permissions'
      }
    }
  }
];

export const ASTRONAUTBIOGRAPHY_MODULE_DECLARATIONS = [
    AstronautBiographyHomeComponent,
    AstronautBiographyNewComponent,
    AstronautBiographyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstronautBiographyRoutingModule { }