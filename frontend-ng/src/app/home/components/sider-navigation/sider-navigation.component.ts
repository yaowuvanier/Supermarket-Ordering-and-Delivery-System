import { CategoryService } from './../../services/category.service';
import { categories } from './../../sampleData/categories.data';
import { Category } from './../../types/category.type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sider-navigation',
  templateUrl: './sider-navigation.component.html',
  styleUrls: ['./sider-navigation.component.scss']
})
export class SiderNavigationComponent {
  categories:Category[] = [];
  constructor (categoryService : CategoryService){
    // Fetch categories from the CategoryService
    //subscrible--Observable through apiURL
   categoryService.getAllCategories().subscribe((categories)=>{
    this.categories = categories;
   });
  }

  getCategorie (categoryName: string) : Category[]{
    return this.categories.filter(
      (category) => categoryName = category.category
    )
  }
}
