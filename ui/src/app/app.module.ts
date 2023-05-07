import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from "@angular/router";
import {AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';
import { RegistrationModule } from './components/registration/registration.module';
import { ExampleModule } from './components/example/example.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AdminPanelModule } from './components/admin-panel/admin-panel.module';
import { TrackAdminPanelModule } from './components/track-admin-panel/track-admin-panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    ExampleModule,
    HttpClientModule,
    MatIconModule,
    AdminPanelModule,
    TrackAdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
