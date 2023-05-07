import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from "./user-add.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [UserAddComponent],
  imports: [
    CommonModule,MatFormFieldModule,ReactiveFormsModule,
    FormsModule,MatInputModule,MatDialogModule,MatButtonModule,MatOptionModule,MatSelectModule
  ],
  exports: [UserAddComponent]
})

export class UserAddModule{ }
