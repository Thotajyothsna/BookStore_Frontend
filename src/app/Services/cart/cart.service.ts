import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any
  constructor(private http:HttpService) { this.token=localStorage.getItem('token') }
  
  CartsCount(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod(`https://localhost:44306/api/Cart/CartCount`,true,head);
  }
  AddCart(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset(`https://localhost:44306/api/Cart/AddToCart?bookId=`+data.bookId,{},true,head);
    }
    updateQuantity(data:{ cartId: number, quantity: number }){
      let head={
        headers:new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.PutMethod(`https://localhost:44306/api/Cart/UpdateCart`,data,true,head);
      
    }
    removeCart(data:any){
      let head={
        headers:new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.DeleteMethod(`https://localhost:44306/api/Cart/DeleteCart?cartId=`+data,true,head);
    }

    GetCartByUserId()
    {
      let head={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.GetMethod(`https://localhost:44306/api/Cart/GetAllUserCart`,true,head);
    }
}
