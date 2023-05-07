import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/utils/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { TrackAddComponent } from '../track-add/track-add.component';
import { Track } from 'app/shared/model/track';
import { TrackSearchComponent } from '../track-search/track-search.component';
import { TrackService } from 'app/utils/track.service';

@Component({
  selector: 'app-track-admin-panel',
  templateUrl: './track-admin-panel.component.html',
  styleUrls: ['./track-admin-panel.component.css']
})
export class TrackAdminPanelComponent implements OnInit {
  tracks:any;
  constructor(private dialog:MatDialog,private adminService:AdminService,private trackService:TrackService) { }
  //img:File;
  ngOnInit(): void {
    this.getTracks()
  }

  /* receiver(event:File){
    console.log('Event received: ')
    this.img=event
  } */

  openDialog():void{
    const dialogRef=this.dialog.open(TrackAddComponent,{});
    dialogRef.afterClosed().subscribe((track:Track)=>{
      if(track.title!=null){
        //this.service.createUser(user.username,user.password,user.isAdmin);
        this.adminService.createTrack(track.title,track.artist,track.image_url,track.video_url).subscribe(d=>{});
        window.location.reload();
      }
    })
  }
  
  

  getTracks() {
    this.trackService.getTracks().subscribe((d: any) => this.tracks = d);
    console.log(this.tracks)
  }
  
}
