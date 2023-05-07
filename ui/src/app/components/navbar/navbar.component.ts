import { Component, OnInit } from '@angular/core';
import{Menu_items} from "../../shared/database/menu_items";
import { LoginService } from 'app/utils/login.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  user=localStorage.getItem('user')
  menu_items?=Menu_items;
  constructor(private loginService:LoginService, private router:Router){

  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    //this.user=localStorage.getItem('user')
  }

}
