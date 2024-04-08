import { Component, EventEmitter,Output, OnDestroy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SearchKeyword } from '../../types/searchKeyword.type';
import { filter } from 'rxjs/operators';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { CategoriesStoreItem } from '../../services/categories.storeItem';
import { UserService } from '../users/services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{

  subscriptions: Subscription = new Subscription();
  isUserAuthenticated: boolean = false;
  userName: string = '';

  constructor(
    public categoryStore: CategoriesStoreItem,
    public cartStore: CartStoreItem,
    public userService: UserService
  ){
    this.subscriptions.add(
      this.userService.isUserAuthenticated$.subscribe((result) => {
        this.isUserAuthenticated = result;
      })
    );

    this.subscriptions.add(
      this.userService.loggedInUser$.subscribe((result) => {
        this.userName = result.firstName;
      })
    );
  }

  @Output()
  searchClicked: EventEmitter<string> = new EventEmitter<string>();
  keyword: string = '';

  onClickSearch():void{
    console.log("search keyword is " + this.keyword);
    this.searchClicked.emit(this.keyword);
  }

  logout(): void {
    this.userService.logout();
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
