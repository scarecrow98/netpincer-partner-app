import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = null;
  selectedOrder: Order = null;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getLatestOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

}
