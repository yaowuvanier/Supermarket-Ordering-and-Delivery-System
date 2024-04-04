import { Component } from '@angular/core';
// import { ProductsService } from './products.service';
// import { Product } from './products.type';
import { ProductsStoreItem } from './products.storeItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers: [ProductsService]
})

export class ProductsComponent {


  constructor(public productsStore: ProductsStoreItem) {
  }
}
