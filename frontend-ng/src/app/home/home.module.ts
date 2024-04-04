import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiderNavigationComponent } from './components/sider-navigation/sider-navigation.component';
import { ProductsComponent } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SiderNavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule
  ]
})
export class HomeModule { }
