class FlaskSection {
    constructor(section) {
        this._section = section;
        this._DEFAUTL_WIDTH = 505;
        this._DEFAUTL_HEIGHT = 550;
        this._DEFAUTL_PADDING_TOP = 102;
        this._proportion = this._DEFAUTL_HEIGHT / this._DEFAUTL_WIDTH;
        this._paddingProportion = this._DEFAUTL_PADDING_TOP / this._DEFAUTL_WIDTH;

        this._setProportions = this._setProportions.bind(this);
        this._setProportions();
        window.addEventListener('resize', this._setProportions);
    }

    _setProportions() {
        const width = parseFloat(getComputedStyle(this._section).width);
        this._section.style.height = width * this._proportion + 'px';
        this._section.style.paddingTop = width * this._paddingProportion + 'px';
    }
}