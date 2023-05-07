import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackAddComponent } from './track-add.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [TrackAddComponent],
  imports: [
    CommonModule,MatFormFieldModule,ReactiveFormsModule,
    FormsModule,MatInputModule,MatDialogModule,MatButtonModule,MatFileUploadModule,MatIconModule
  ],
  exports: [TrackAddComponent]
})

export class TrackAddModule{ }
