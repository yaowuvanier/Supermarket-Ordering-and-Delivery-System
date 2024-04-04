// import { Icon } from 'bootstrap-icons/icons';
// import { BiStar,BiStarFill,BiStarHalf } from 'bootstrap-icons/font/bootstrap-icons.css';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {
  // biStarFill = new BiStarFill();
  // biStarHalf = new BiStarHalf();
  // biStar = new BiStar();

  // stars: Icon[] = [];

  // private _score: number = 0;
  // @Input()
  // set score(val: number) {
  //   this._score = val > 5 ? 5 : val;
  //   const solidStarCount: number = Math.floor(this._score);
  //   for (let i: number = 0; i < solidStarCount; i++) {
  //     this.stars.push(this.biStarFill);
  //   }

  //   if (this._score - solidStarCount > 0 && this._score - solidStarCount < 1) {
  //     this.stars.push(this.biStarHalf);
  //   }

  //   for (let i: number = this.stars.length; i < 5; i++) {
  //     this.stars.push(this.biStar);
  //   }
  // }
}
