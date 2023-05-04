import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NavbarModule} from "../navbar/navbar.module";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, NavbarModule,HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
