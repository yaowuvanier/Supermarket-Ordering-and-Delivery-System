import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './home/components/cart/cart.component';
import { UserSignupComponent } from './home/components/users/user-signup/user-signup.component';
import { UserLoginComponent } from './home/components/users/user-login/user-login.component';
import { ProductsComponent } from './home/components/products/products.component';
import { PastordersComponent } from './home/components/pastorders/pastorders.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cart', component:CartComponent},
  {path: 'signup', component:UserSignupComponent},
  {path: 'login', component:UserLoginComponent},
  {path: 'pastorders', component:PastordersComponent},
  {path: '**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
