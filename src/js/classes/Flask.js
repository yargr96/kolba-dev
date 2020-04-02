class Flask {
    constructor({flask, fullness = 0}) {
        this._flask = flask;
        this._fullness = fullness;
        this._filler = this._flask.querySelector('.flask__full');

        this._MAX_FILLER_HEIGHT = 80;
        this._MIN_FILLER_HEIGHT = 2;

        this._fillerHeightRange = this._MAX_FILLER_HEIGHT - this._MIN_FILLER_HEIGHT;

        this._setFillerHeight();
    }

    _setFillerHeight() {
        const height = this._fillerHeightRange * this._fullness + this._MIN_FILLER_HEIGHT;
        this._filler.style.height = height + '%';
    }

    set fullness(value) {
        this._fullness = value;
        this._setFillerHeight();
    }
}