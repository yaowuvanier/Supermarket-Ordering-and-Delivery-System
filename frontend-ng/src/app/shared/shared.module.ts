import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';



@NgModule({
  declarations: [
    RatingsComponent
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[RatingsComponent]
})
export class SharedModule { }
