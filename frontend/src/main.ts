/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LikeComponent } from './like';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)) ;

// let component = new LikeComponent(10, true)
// component.clickButton();
// console.log(`likeCounts is ${component.likeCounts},isSelected is ${ component.isSelected}`)
