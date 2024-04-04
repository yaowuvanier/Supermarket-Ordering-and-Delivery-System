import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavigationComponent } from './components/sider-navigation/sider-navigation.component';
import { ProductsComponent } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';
import { CategoriesStoreItem } from './services/categories.storeItem';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [CategoryService, CategoriesStoreItem],
})
export class HomeModule { }
