import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TrackSearchComponent} from "./track-search.component";

const routes:Routes=[
  {
    path:'',
    component:TrackSearchComponent,
    data: { title: 'TrackSearch - ngSpotify' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackSearchRoutingModule { }
