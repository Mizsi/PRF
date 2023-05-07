import {Component, Inject, OnInit, EventEmitter,Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AdminPanelComponent} from "../admin-panel/admin-panel.component";

export function gerForm(): FormGroup {
  return new FormGroup({
    title: new FormControl('',Validators.required),
    artist: new FormControl('',Validators.required),
    //image: new FormControl('')
    image_url: new FormControl('',Validators.required),
    video_url: new FormControl('',Validators.required),
  });
}

@Component({
  selector: 'app-track-add',
  templateUrl: './track-add.component.html',
  styleUrls: ['./track-add.component.css'],

})
export class TrackAddComponent implements OnInit {
  form: FormGroup | null = null;

  /* public file: File;

   @Output() sender=new EventEmitter ()

  onChange(event:any) {
    this.file = event.target.files[0];
    console.log(this.file)
    this.sender.emit(this.file)
} */

  constructor(public dialogRef:MatDialogRef<AdminPanelComponent>) { }

  ngOnInit(): void {
    this.form = gerForm();
  }

  

}
