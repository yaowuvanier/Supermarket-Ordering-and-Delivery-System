export class LikeComponent {
    // static likeCounts : number;
    // private clickNumber = 0;
    // private buttonOn = false;

    constructor ( private _likeCounts : number, private _isSelected : boolean){

    }

    get likeCounts(){
        return this._likeCounts;
    }

    get isSelected(){
        return this._isSelected;
    }

    clickButton() {
    //    this.clickNumber = (this.clickNumber++) % 2; 
    //    this.buttonOn = this.clickNumber == 0 ? false : true;
    //     if (this.buttonOn)
    //         LikeComponent.likeCounts++;
    //     else
    //         LikeComponent.likeCounts--;

        this._likeCounts += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

}