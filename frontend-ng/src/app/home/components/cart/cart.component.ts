import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartStoreItem } from '../../services/cart/cart.storeItem';

import { CartItem } from '../../types/cart.type';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users/services/user-service.service';
import { loggedInUser } from '../../types/user.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy{
  // Related to orders
  orderForm: FormGroup;
  user: loggedInUser;
  subscriptions: Subscription = new Subscription();

  constructor(
    public cartStore: CartStoreItem, 
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.user = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      pin: '',
      email: '',
    };
    this.subscriptions.add(
      userService.loggedInUser$.subscribe((loggedUser) => {
        if (loggedUser.firstName) {
          this.user = loggedUser;
        }
      })
    );
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: [
        `${this.user.firstName} ${this.user.lastName}`,
        Validators.required,
      ],
      address: [this.user.address, Validators.required],
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required],
      pin: [this.user.pin, Validators.required],
    });
  }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }

  updateQuantity($event: any, cartItem: CartItem): void {
    if ($event.target.innerText === '+') {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === '-') {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    this.cartStore.removeProduct(cartItem);
  }

  onSubmit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  
}
