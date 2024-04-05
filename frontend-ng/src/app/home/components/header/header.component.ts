import { Component, EventEmitter,Output } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SearchKeyword } from '../../types/searchKeyword.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  searchClicked: EventEmitter<string> = new EventEmitter<string>();
  keyword: string = '';

  onClickSearch():void{
    console.log("search keyword is " + this.keyword);
    this.searchClicked.emit(this.keyword);
  }
}
