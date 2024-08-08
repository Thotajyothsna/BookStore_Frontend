import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order/order.service';

@Component({
  selector: 'app-orders-placed',
  templateUrl: './orders-placed.component.html',
  styleUrl: './orders-placed.component.scss'
})
export class OrdersPlacedComponent implements OnInit {


  ListofOrders:any;
  constructor(private order:OrderService){}
  ngOnInit(): void {
    this.GetAllOrders();
  }
  GetAllOrders(){
    this.order.GetAllOrdersById().subscribe((response:any)=>{
      console.log(response);
      this.ListofOrders=response.data;
    })
  }
  haveOrders():boolean{
    return this.ListofOrders!==undefined;
  }
}
