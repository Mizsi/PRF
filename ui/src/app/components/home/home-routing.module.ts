import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackAdminPanelModule } from './../track-admin-panel/track-admin-panel.module';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'trackSearch',
        loadChildren:()=>import('../track-search/track-search.component.module').then(m=>m.TrackSearchModule)
      },
      {
        path: 'adminPanel',
        loadChildren: () => import('./../admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
      },
      {
        path: 'trackAdminPanel',
        loadChildren: () => import('./../track-admin-panel/track-admin-panel.module').then(m=>TrackAdminPanelModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
