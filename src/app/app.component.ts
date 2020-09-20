import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Angular-Service';
  title = 'User Dashboard';
  orders=[];
  showOrderDetails=false;
  selectedOrder:any;

  constructor(private orderservice:OrderService){}

  ngOnInit(){
    this.orderservice.getOrders().subscribe(
      data=>{
        this.orders=data;
        console.log(this.orders)
      },
      error=>{console.log('error in faching orders')}
    )
  }

  orderDetails(id){
    this.showOrderDetails=true;
    // alert(data);
    this.selectedOrder=this.orders.find(data=>data.id==id);
    // console.log(this.selectedOrder);

  }

  closeOrderDetails(data){
       this.showOrderDetails=data;
  }
}
