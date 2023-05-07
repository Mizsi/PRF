import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrackComponent} from "./track.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [TrackComponent],
  imports: [
    CommonModule,MatCardModule,MatIconModule
  ],
  exports: [TrackComponent]
})
export class TrackComponentModule { }
