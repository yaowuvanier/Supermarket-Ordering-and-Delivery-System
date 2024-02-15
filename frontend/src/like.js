"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    // static likeCounts : number;
    // private clickNumber = 0;
    // private buttonOn = false;
    function LikeComponent(_likeCounts, _isSelected) {
        this._likeCounts = _likeCounts;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likeCounts", {
        get: function () {
            return this._likeCounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    LikeComponent.prototype.clickButton = function () {
        //    this.clickNumber = (this.clickNumber++) % 2; 
        //    this.buttonOn = this.clickNumber == 0 ? false : true;
        //     if (this.buttonOn)
        //         LikeComponent.likeCounts++;
        //     else
        //         LikeComponent.likeCounts--;
        this._likeCounts += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
