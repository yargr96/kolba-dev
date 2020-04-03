class Flask {
    constructor({flask, fullness = 0}) {
        this._flask = flask;
        this._fullness = fullness;
        this._filler = this._flask.querySelector('.flask__full');

        this._MAX_FILLER_HEIGHT = 80;
        this._MIN_FILLER_HEIGHT = 14;

        this._fillerHeightRange = this._MAX_FILLER_HEIGHT - this._MIN_FILLER_HEIGHT;

        this._setFillerHeight();

        this._DEFAULT_WIDTH = 547;
        this._DEFAULT_HEIGHT = 395;
        this._proportion = this._DEFAULT_HEIGHT / this._DEFAULT_WIDTH;
        this._setProportions = this._setProportions.bind(this);
        this._setProportions();
        window.addEventListener('resize', this._setProportions);
    }

    _setFillerHeight() {
        let height;
        
        if (this._fullness === 0) {
            height = 0;
        } else {
            height = this._fillerHeightRange * this._fullness + this._MIN_FILLER_HEIGHT;
        }

        this._filler.style.height = height + '%';
    }

    _setProportions() {
        const width = parseFloat(getComputedStyle(this._flask).width);
        this._flask.style.height = width * this._proportion + 'px';
    }

    set fullness(value) {
        this._fullness = value;
        this._setFillerHeight();
    }
}