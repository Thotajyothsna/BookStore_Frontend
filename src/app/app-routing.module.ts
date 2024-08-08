import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { GetBookByIdComponent } from './Components/get-book-by-id/get-book-by-id.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrdersPlacedComponent } from './Components/orders-placed/orders-placed.component';
import { MyWishlistComponent } from './Components/my-wishlist/my-wishlist.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProfileComponent } from './Components/profile/profile.component';


const routes: Routes = [
  {path:'login',component:LoginSignupComponent},
  {path:'allbooks',component:GetAllBooksComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'',redirectTo:"/dashboard/allbooks",pathMatch:'full'},
      {path:'allbooks',component:GetAllBooksComponent},
      {path:'bookdetails/:id',component:GetBookByIdComponent},
      {path:'cart',component:CartComponent},
      {path:'orders',component:OrdersPlacedComponent},
      {path:'mywishlist',component:MyWishlistComponent},
      {path:'ordersuccess',component:OrderSuccessComponent},
      {path:'profile',component:ProfileComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
