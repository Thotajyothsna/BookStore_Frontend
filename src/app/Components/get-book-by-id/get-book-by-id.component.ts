import { Component,Input, OnInit } from '@angular/core';
import { BookService } from '../../Services/book/book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';
import { WishlistService } from '../../Services/wishlist/wishlist.service';
@Component({
  selector: 'app-get-book-by-id',
  templateUrl: './get-book-by-id.component.html',
  styleUrl: './get-book-by-id.component.scss'
})
export class GetBookByIdComponent implements OnInit{
  bookObject:any;
  id:any;
  constructor(private book:BookService,
    private route: ActivatedRoute,
    private router:Router,
    private cart:CartService,
  private wish:WishlistService){
      
    }
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getBookById();}

      getBookById(){
        this.book.getById(this.id).subscribe((response:any)=>{
          console.log(response);
          this.bookObject=response.data;
        })
      }
      BookExists(): boolean{
        return this.bookObject !== undefined;
      }
      AddToCart(){
        if(!localStorage.getItem('token'))
          {
            this.router.navigate(['/login']);
          }
        else{
        let data={
          bookId:this.id
        }
        this.cart.AddCart(data).subscribe((response)=>{
          console.log(response);
        })
        }
      }

      AddToWishList(){
        if(!localStorage.getItem('Token'))
          {
            this.router.navigate(['/login']);
            return 'login';
          }
        else{
        let data={
          bookId:this.id
        }
        return this.wish.AddWishList(data).subscribe((response:any)=>{
          console.log(response);
        })
        }
      }
      AddFeedBack(){}
      GetAllFeedBack(){}
      haveFeedbacks(){}
      
}
