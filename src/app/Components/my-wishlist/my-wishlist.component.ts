import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist/wishlist.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrl: './my-wishlist.component.scss'
})
export class MyWishlistComponent implements OnInit{

  WishLists:any;
  constructor(private wish:WishlistService){}
  ngOnInit(): void {
    this.GetAllWishList();
  }
  GetAllWishList(){
    this.wish.GetWishListByUserId().subscribe((response:any)=>{
      console.log(response);
      this.WishLists=response.data;
    })
  }
  removeWishList(Item:any){
    this.wish.removeWishList(Item).subscribe((response:any)=>{
      console.log(response);
      this.GetAllWishList();
    })
  }  
  WishListExists(){
    return this.WishLists !== undefined;
  }
}
