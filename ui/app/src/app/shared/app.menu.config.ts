import { MenuRootItem } from 'ontimize-web-ngx';

import { AstronautCardComponent } from './Astronaut-card/Astronaut-card.component';

import { AstronautBiographyCardComponent } from './AstronautBiography-card/AstronautBiography-card.component';

import { AstronautRankCardComponent } from './AstronautRank-card/AstronautRank-card.component';

import { LaunchCardComponent } from './Launch-card/Launch-card.component';

import { LaunchIntegratorCardComponent } from './LaunchIntegrator-card/LaunchIntegrator-card.component';

import { MissionCardComponent } from './Mission-card/Mission-card.component';

import { MissionCrewCardComponent } from './MissionCrew-card/MissionCrew-card.component';

import { MissionSummaryCardComponent } from './MissionSummary-card/MissionSummary-card.component';

import { MissionTypeCardComponent } from './MissionType-card/MissionType-card.component';

import { SpaceSectorCardComponent } from './SpaceSector-card/SpaceSector-card.component';

import { SpacecraftCardComponent } from './Spacecraft-card/Spacecraft-card.component';

import { SpacecraftComponentCardComponent } from './SpacecraftComponent-card/SpacecraftComponent-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Astronaut', name: 'ASTRONAUT', icon: 'view_list', route: '/main/Astronaut' }
    
        ,{ id: 'AstronautBiography', name: 'ASTRONAUTBIOGRAPHY', icon: 'view_list', route: '/main/AstronautBiography' }
    
        ,{ id: 'AstronautRank', name: 'ASTRONAUTRANK', icon: 'view_list', route: '/main/AstronautRank' }
    
        ,{ id: 'Launch', name: 'LAUNCH', icon: 'view_list', route: '/main/Launch' }
    
        ,{ id: 'LaunchIntegrator', name: 'LAUNCHINTEGRATOR', icon: 'view_list', route: '/main/LaunchIntegrator' }
    
        ,{ id: 'Mission', name: 'MISSION', icon: 'view_list', route: '/main/Mission' }
    
        ,{ id: 'MissionCrew', name: 'MISSIONCREW', icon: 'view_list', route: '/main/MissionCrew' }
    
        ,{ id: 'MissionSummary', name: 'MISSIONSUMMARY', icon: 'view_list', route: '/main/MissionSummary' }
    
        ,{ id: 'MissionType', name: 'MISSIONTYPE', icon: 'view_list', route: '/main/MissionType' }
    
        ,{ id: 'SpaceSector', name: 'SPACESECTOR', icon: 'view_list', route: '/main/SpaceSector' }
    
        ,{ id: 'Spacecraft', name: 'SPACECRAFT', icon: 'view_list', route: '/main/Spacecraft' }
    
        ,{ id: 'SpacecraftComponent', name: 'SPACECRAFTCOMPONENT', icon: 'view_list', route: '/main/SpacecraftComponent' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AstronautCardComponent

    ,AstronautBiographyCardComponent

    ,AstronautRankCardComponent

    ,LaunchCardComponent

    ,LaunchIntegratorCardComponent

    ,MissionCardComponent

    ,MissionCrewCardComponent

    ,MissionSummaryCardComponent

    ,MissionTypeCardComponent

    ,SpaceSectorCardComponent

    ,SpacecraftCardComponent

    ,SpacecraftComponentCardComponent

];