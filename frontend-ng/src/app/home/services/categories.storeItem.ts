import { StoreItem } from 'src/app/shared/storeItem';
import { Category } from '../types/category.type';
import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class CategoriesStoreItem extends StoreItem<Category[]> {
  constructor(private categoryService: CategoryService) {
    super([]);
  }

  async loadCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.setValue(categories);
    });
  }

  get categories$(): Observable<Category[]> {
    return this.value$;
  }

//   getCategorie$(type: string): Observable<Category> {
//     return this.value$.pipe(
//       map((categories) =>
//         categories.find((category) => category.category === type)
//       )
//     );
//   }
}
