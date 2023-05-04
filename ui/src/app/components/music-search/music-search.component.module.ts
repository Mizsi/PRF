import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicSearchComponent} from "./music-search.component";
import {MusicSearchRoutingModule} from "./music-search-routing.module";
import {NavbarModule} from "../search/searchbar.component.module";
import {MatIconModule} from "@angular/material/icon";
import {MusicComponentModule} from "../music/music.component.module";

@NgModule({
  declarations:[MusicSearchComponent],
  imports: [
    CommonModule, MusicSearchRoutingModule, NavbarModule, MatIconModule, MusicComponentModule,
  ],
  exports:[MusicSearchComponent]
})
export class MusicSearchModule{}
