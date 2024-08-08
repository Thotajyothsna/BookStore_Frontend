import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpservice:HttpService) { this.token=localStorage.getItem('token'); }

  login(data: any){
    let header={
      head: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpservice.PostMethod(`https://localhost:44306/api/User/Login`,data,false,header);
  }

  signin(data:any){
    let header={
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpservice.PostMethod(`https://localhost:44306/api/User/SignUp`,data,false,header);
  }
  
  GetById(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.GetMethod(`https://localhost:44306/api/User/UserDetails`,true,head);
  }
  UpdateProfile(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.PutMethod(`https://localhost:44306/api/User/UpdateDetails`,data,true,head);
  }
}
