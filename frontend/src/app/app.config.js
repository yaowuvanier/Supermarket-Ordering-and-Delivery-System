"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
exports.appConfig = {
    providers: [(0, router_1.provideRouter)(app_routes_1.routes)]
};
