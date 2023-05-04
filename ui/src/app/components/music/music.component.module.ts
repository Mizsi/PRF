import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicComponent} from "./music.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,MatCardModule,MatIconModule
  ],
  exports: [MusicComponent]
})
export class MusicComponentModule { }
