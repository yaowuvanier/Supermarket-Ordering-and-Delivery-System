import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
