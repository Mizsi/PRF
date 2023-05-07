import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrackSearchComponent} from "./track-search.component";
import {TrackSearchRoutingModule} from "./track-search-routing.module";
import {NavbarModule} from "../search/searchbar.component.module";
import {MatIconModule} from "@angular/material/icon";
import {TrackComponentModule} from "../track/track.component.module";

@NgModule({
  declarations:[TrackSearchComponent],
  imports: [
    CommonModule, TrackSearchRoutingModule, NavbarModule, MatIconModule, TrackComponentModule,
  ],
  exports:[TrackSearchComponent]
})
export class TrackSearchModule{}
