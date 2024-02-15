"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err)) ;
var component = new like_1.LikeComponent(10, true);
component.clickButton();
console.log("likeCounts is ".concat(component.likeCounts, ",isSelected is ").concat(component.isSelected));
