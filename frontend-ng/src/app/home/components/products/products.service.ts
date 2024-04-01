import { Injectable } from '@angular/core';
import { ProductListItem } from './products.type';
import { products } from './products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductsList() : ProductListItem[]{
    return products;
  }
}
