import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(environment.serverURl + 'login', {username: username, password:password},{responseType: 'text'});
  }

  logout(){
    return this.http.post(environment.serverURl+ 'logout', {}, {withCredentials: true, responseType:'text'})
  }
}
