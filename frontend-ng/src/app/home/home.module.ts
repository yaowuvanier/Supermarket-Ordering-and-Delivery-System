import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiderNavigationComponent } from './components/sider-navigation/sider-navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { FontAwesomeModule } from '@fortawesome/free-regular-svg-icons'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SiderNavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    SharedModule
  ]
})
export class HomeModule { }
