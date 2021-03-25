import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @Input()
  orders: Order[] = null;
  selectedOrder: Order = null;

  @Output()
  onOrderClicked: EventEmitter<Order> = new EventEmitter<Order>();

  constructor() { }

  ngOnInit(): void {
  }

  orderClicked(order: Order) {
    this.selectedOrder = order;
    this.onOrderClicked.emit(order);
  }
}
