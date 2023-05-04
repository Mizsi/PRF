import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MusicSearchComponent} from "./music-search.component";

const routes:Routes=[
  {
    path:'',
    component:MusicSearchComponent,
    data: { title: 'MusicSearch - ngSpotify' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicSearchRoutingModule { }
