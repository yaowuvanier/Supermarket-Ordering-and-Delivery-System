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
  onClickSearch(keyword : string):void{
    this.searchClicked.emit(keyword);
  }
}
