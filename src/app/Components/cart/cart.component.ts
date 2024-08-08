import { Component, OnInit ,Optional,signal} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { CartService } from '../../Services/cart/cart.service';
import { AddressService } from '../../Services/address/address.service';
import { Router } from '@angular/router';
import { OrderService } from '../../Services/order/order.service';
import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  option1:number=1;
  option2:number=2;
  option3:number=3;
  Listofcarts:any;
  AddressForm!:FormGroup;
  readonly floatLabelControl = new FormControl('Home' as FloatLabelType);
  flags:boolean=true;
  count:any;
  address:boolean=false;
  order:boolean=false;
  cartOrder:any;
  addressId:any;
  constructor(
    private cart:CartService,
    private formbuilder:FormBuilder,
    private addressService:AddressService,
    private orderService:OrderService,
    private route:Router,
    private user:UserService
  ){}

  ngOnInit(): void {
    this.getCartById();
    this.AddressForm=this.formbuilder.group({
      fullName:[''],
      mobileNumber:[''],
      address:[''],
      city:[''],
      state:[''],
      type:[1]
    });
  }
  
  getCartById(){
    this.cart.GetCartByUserId().subscribe((response:any)=>{
      console.log(response);
      this.Listofcarts=response.data;
      this.cart.CartsCount().subscribe((response:any)=>{
        console.log(response);
        this.count=response.data;
      })
    })
  }
  haveCart(){
    return this.Listofcarts !== undefined;
  }
  updateQuantity(cart: any, increment: boolean) {
    let data = {
        cartId: cart.cartId,
        quantity: increment ? cart.quantity + 1 : cart.quantity - 1
    };
    if (data.quantity >= 1 && data.quantity <= 5) {
        this.cart.updateQuantity(data).subscribe((response: any) => {
            console.log(response);
            this.getCartById();
        });
    } else if (data.quantity < 1) {
        this.remove(cart.cartId);
    }
}

  remove(id:any){
    this.cart.removeCart(id).subscribe((response:any)=>{
      console.log(response);
      this.getCartById();
    })
  }
  AddAddress(){
  
    fullName:this.AddressForm.value.fullName;
      mobileNumber:this.AddressForm.value.mobileNumber;
    let data={
      
      address:this.AddressForm.value.address,
      city:this.AddressForm.value.city,
      state:this.AddressForm.value.state,
      addressTypeId:Number(this.AddressForm.value.type),
      
    }
    this.addressService.AddAddress(data).subscribe((response:any)=>{
      console.log(response);
      this.addressId = response.data.addressId;
      this.address = false; // Hide the address form after adding address
      this.order = true;
      
    })
  }
  checkout(cart:any){
    console.log(cart);
    this.cartOrder=cart;
  }
  placeOrder(){
    let data={
      cartId:this.cartOrder.cartId,
      addressId:this.addressId
    }
    this.orderService.PlaceOrder(data).subscribe((response:any)=>{
      console.log(response);
      this.route.navigate(['/dashboard/ordersuccess']);
    })
  }
}
