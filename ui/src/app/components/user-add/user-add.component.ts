import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AdminPanelComponent} from "../admin-panel/admin-panel.component";

export function gerForm(): FormGroup {
  return new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl(''),
    isAdmin: new FormControl(false),
  });
}

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],

})
export class UserAddComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(public dialogRef:MatDialogRef<AdminPanelComponent>) { }

  ngOnInit(): void {
    this.form = gerForm();
  }

}
