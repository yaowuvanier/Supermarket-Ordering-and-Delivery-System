import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { SidenavigationComponent } from './components/sider-navigation/sider-navigation.component';
import { ProductsComponent } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';
import { CategoriesStoreItem } from './services/categories.storeItem';

import { ProductsStoreItem } from './components/products/products.storeItem';
import { ProductsService } from './components/products/products.service';
import { CartStoreItem } from './services/cart/cart.storeItem';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavigationComponent,
    ProductsComponent,
    CartComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  providers: [CategoryService, CategoriesStoreItem, ProductsService, ProductsStoreItem,CartStoreItem],
})
export class HomeModule { }
