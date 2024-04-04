import { Category } from './types/category.type';
import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/categories.storeItem';
import { ProductsStoreItem } from './components/products/products.storeItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private categoriesStoreItem: CategoriesStoreItem, private productsStoreItem: ProductsStoreItem) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  onSelectCategory(categoryId:number):void{
    console.log("home get the argument category id is " + categoryId)
    this.productsStoreItem.loadProducts('categoryId='+categoryId);
  }
}
