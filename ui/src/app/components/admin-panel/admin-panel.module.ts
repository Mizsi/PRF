import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from "./admin-panel.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { UserAddModule } from '../user-add/user-add.module';
import { RouterModule } from "@angular/router";
import { AdminPanelRoutingModule } from './admin-panel-routing.module';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule, MatIconModule, MatTableModule, RouterModule, UserAddModule, AdminPanelRoutingModule
  ],
  exports: [AdminPanelComponent]
})
export class AdminPanelModule { }
