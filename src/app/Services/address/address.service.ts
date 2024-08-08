import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token');
  }

  AddAddress(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset('https://localhost:44306/api/Address/addAddress', data, true, head);
  }
  getAllAddress(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod(`https://localhost:44306/api/Address/GetAllUserAddress`,true,head);
  }
  EditAddress(reqdata:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:44306/api/Address/UpdateAddress`,reqdata,true,head); 
  }
}
