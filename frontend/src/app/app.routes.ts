import { Routes } from '@angular/router';
// import {CoursewebComponent} from './course-web.component'
// import { LoginComponent } from './pages/admin/login/login.component';
// import { AuthorsComponent } from './authors/authors.component';
// import { FavoriteComponent } from './favorite/favorite.component';
// import { TitleCaseComponent } from './title-case/title-case.component';
// import { DIRECTIVEComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

export const routes: Routes = [
    // {
    //     path : '',
    //     redirectTo: 'login',
    //     pathMatch : 'full',
    // },
    {  path: '',  component: HomeComponent },
    {  path: 'products',  component: ProductsComponent },
    {  path: 'shopping-cart',  component: ShoppingCartComponent },
    {  path: 'check-out',  component: CheckOutComponent },
    {  path: 'order-success',  component: OrderSuccessComponent },
    {  path: 'login',  component: LoginComponent },
    {  path: 'admin/produts',  component: AdminProductsComponent },   
    {  path: 'admin/orders',  component: AdminOrdersComponent },
    {  path: '',  component: HomeComponent },

    
];
