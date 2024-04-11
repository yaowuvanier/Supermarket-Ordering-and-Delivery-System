import { PastOrder } from './../../types/order.type';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PastOrder, PastOrderProduct } from '../../types/order.type';
import { OrderService } from '../../services/order/orders.service';
import { UserService } from '../users/services/user-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.scss'],
})
export class PastordersComponent implements OnInit, OnDestroy{
  pastOrderProducts: PastOrderProduct[] = [];
  PastOrder : PastOrder;
  pastOrders: PastOrder[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.orderService
        .getOrders(this.userService.loggedInUser.email)
        .subscribe((pastOrders) => {
          this.pastOrders = pastOrders;
        })
    );
  }

  
  pastOrder: PastOrder = {
    address: 'Address goes here',
    city: 'New Jersey',
    orderDate: '03/01/23',
    pin: '12345',
    state: 'NY',
    total: 100,
    userName: 'Thomas Brown',
  };

  selectOrder(event: any): void {}
}
