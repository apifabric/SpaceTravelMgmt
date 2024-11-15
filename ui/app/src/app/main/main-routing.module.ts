import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Astronaut', loadChildren: () => import('./Astronaut/Astronaut.module').then(m => m.AstronautModule) },
    
        { path: 'AstronautBiography', loadChildren: () => import('./AstronautBiography/AstronautBiography.module').then(m => m.AstronautBiographyModule) },
    
        { path: 'AstronautRank', loadChildren: () => import('./AstronautRank/AstronautRank.module').then(m => m.AstronautRankModule) },
    
        { path: 'Launch', loadChildren: () => import('./Launch/Launch.module').then(m => m.LaunchModule) },
    
        { path: 'LaunchIntegrator', loadChildren: () => import('./LaunchIntegrator/LaunchIntegrator.module').then(m => m.LaunchIntegratorModule) },
    
        { path: 'Mission', loadChildren: () => import('./Mission/Mission.module').then(m => m.MissionModule) },
    
        { path: 'MissionCrew', loadChildren: () => import('./MissionCrew/MissionCrew.module').then(m => m.MissionCrewModule) },
    
        { path: 'MissionSummary', loadChildren: () => import('./MissionSummary/MissionSummary.module').then(m => m.MissionSummaryModule) },
    
        { path: 'MissionType', loadChildren: () => import('./MissionType/MissionType.module').then(m => m.MissionTypeModule) },
    
        { path: 'SpaceSector', loadChildren: () => import('./SpaceSector/SpaceSector.module').then(m => m.SpaceSectorModule) },
    
        { path: 'Spacecraft', loadChildren: () => import('./Spacecraft/Spacecraft.module').then(m => m.SpacecraftModule) },
    
        { path: 'SpacecraftComponent', loadChildren: () => import('./SpacecraftComponent/SpacecraftComponent.module').then(m => m.SpacecraftComponentModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }