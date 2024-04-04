import { Component,OnDestroy, EventEmitter, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriesStoreItem } from '../../services/categories.storeItem';
import { CategoryService } from './../../services/category.service';
import { categories } from './../../sampleData/categories.data';
import { Category } from './../../types/category.type';

@Component({
  selector: 'app-sider-navigation',
  templateUrl: './sider-navigation.component.html',
  styleUrls: ['./sider-navigation.component.scss']
})
// 
export class SidenavigationComponent implements OnDestroy {
  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();

  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoriesStoreItem) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(): Category[] {
    return this.categories;
  }

  onCategoryClicked(category:Category):void{
    this.categoryClicked.emit(category.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
