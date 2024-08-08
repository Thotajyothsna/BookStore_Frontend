import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token:any;
  constructor(private http:HttpService) 
  {
    this.token=localStorage.getItem('token');
  }
  AddWishList(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset(`https://localhost:44306/api/WishList/AddToWishList?BookId=`+data.bookId,{},true,head);
    }
    GetWishListByUserId()
    {
      let head={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.GetMethod(`https://localhost:44306/api/WishList/UserWishList`,true,head);
    }
    removeWishList(data:any)
    {
      let head={
        headers: new HttpHeaders({
          'content-type':'application/json',
          'Authorization':'Bearer '+this.token
        })
      }
      return this.http.DeleteMethod(`https://localhost:44306/api/WishList/DeleteWishListItem?WishListId=`+data.wishListId,true,head);
    }
}
