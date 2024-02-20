import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TitleCasePipe} from "../title-case.pipe"

@Component({
  selector: 'app-title-case',
  // standalone : true,
  // imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.scss']
})
export class TitleCaseComponent {
  title = '';
}

@NgModule({
  declarations: [
    TitleCaseComponent,
    TitleCasePipe // Add TitleCasePipe to declarations
  ],
  imports: [
    CommonModule,
    FormsModule
   ],
  // providers: [
  //   TitleCasePipe
  // ]
})
export class TitleCaseModule {}
