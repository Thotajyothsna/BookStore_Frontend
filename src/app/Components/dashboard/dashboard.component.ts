import { Component ,OnInit} from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user/user.service';
import { response } from 'express';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  countCart:any;
  fullName:any;
  constructor(private cart:CartService,private path:Router,private user:UserService){}
  ngOnInit(): void {
    this.NoOfCarts();
    const token = localStorage.getItem('token');

    if (token) {
      // If the token exists, call GetById
      this.user.GetById().subscribe((response: any) => {
        if (response && response.data && response.data.fullName) {
          this.fullName = response.data.fullName;
        } else {
          this.fullName = ''; // In case the fullName is not available in response
        }
      });
    } else {
      // If no token, set fullName to empty string
      this.fullName = '';
    }
    
  }
  NoOfCarts(){
    this.cart.CartsCount().subscribe((response:any)=>{
      console.log(response);
      this.countCart=response.data;
    })
  }
  searchingBook($event:any){}
  countpresent(){
    return this.countCart>=1;
  }
  logOut(){
    localStorage.clear();
    this.path.navigate(['/login']);
  }
  dashboard(){
    this.path.navigateByUrl('/dashboard');
  }
}
