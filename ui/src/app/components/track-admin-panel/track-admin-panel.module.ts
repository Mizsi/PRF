import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackAdminPanelComponent } from './track-admin-panel.component';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { TrackAddModule } from '../track-add/track-add.module';
import { RouterModule } from "@angular/router";
import { TrackAdminPanelRoutingModule } from './track-admin-panel-routing.module';
import { TrackComponentModule } from '../track/track.component.module';

@NgModule({
  declarations: [TrackAdminPanelComponent],
  imports: [
    CommonModule, MatIconModule, MatTableModule, RouterModule, TrackAddModule,TrackAdminPanelRoutingModule,TrackComponentModule
  ],
  exports: [TrackAdminPanelComponent]
})
export class TrackAdminPanelModule { }
