import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'MusicSearch',
        loadChildren:()=>import('./../music-search/music-search.component.module').then(m=>m.MusicSearchModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
