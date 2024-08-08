import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token');
  }

 PlaceOrder(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset('https://localhost:44306/api/Orders/PlaceOrder', data, true, head);
  }
  GetAllOrdersById(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod('https://localhost:44306/api/Orders/UserOrders', true, head);
  }
}
