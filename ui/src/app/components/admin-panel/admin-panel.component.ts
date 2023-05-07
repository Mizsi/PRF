import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/utils/admin.service';
import { Router } from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import { UserAddComponent } from '../user-add/user-add.component';
import { User } from 'app/shared/model/user';
import { Users } from 'app/shared/database/users';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users:any;
  columndefs : any[] = ['username','isAdmin','delete'];
  constructor(private dialog:MatDialog,private service:AdminService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
   this.users=this.service.getUsers()
    //console.log(this.authService.getUsers())
  }
  deleteUser(username:string){
    console.log('DeleteUser called with username:'+username)
    this.service.deleteUser(username).subscribe(d=>{})
    window.location.reload();
  }

  updateUser(username:string){
    const dialogRef=this.dialog.open(UserAddComponent);
    dialogRef.afterClosed().subscribe((user:User)=>{
      if(user.username!=null){
        this.service.updateUser(username,dialogRef).subscribe(d=>{});
      }
    })
    //this.service.update(userid,)
  }

  openDialog():void{
    const dialogRef=this.dialog.open(UserAddComponent,{});
    dialogRef.afterClosed().subscribe((user:User)=>{
      if(user.username!=null){
        this.service.createUser(user.username,user.password,user.isAdmin).subscribe(d=>{});
        window.location.reload();
      }
    })
  }
}
