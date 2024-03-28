import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiderNavigationComponent } from './components/sider-navigation/sider-navigation.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SiderNavigationComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class HomeModule { }
