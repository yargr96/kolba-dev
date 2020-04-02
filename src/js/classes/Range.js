class Range {
    constructor({rangeNode, min, max, step, value, onChange}) {
        this._rangeNode = rangeNode;
        this._min = min;
        this._max = max;
        this._step = step;

        if (onChange) this.onChange = onChange;

        this._filled = this._rangeNode.querySelector('.range__filled');
        this._thumb = this._rangeNode.querySelector('.range__thumb');
        this._count = this._rangeNode.querySelector('.range__count');

        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        this._onMouseUp = this._onMouseUp.bind(this);

        this._thumb.addEventListener('mousedown', this._onMouseDown);
        this._thumb.addEventListener('touchstart', this._onMouseDown);

        window.addEventListener('mouseup', this._onMouseUp);
        window.addEventListener('touchend', this._onMouseUp);

        this._stepsCount = (this._max - this._min) / this._step;

        this.value = value === undefined ? this._min : value;

        this._setRangeCoordinates = this._setRangeCoordinates.bind(this);
        this._setRangeCoordinates();
        window.addEventListener('resize', this._setRangeCoordinates);

        this._setThumbPosition();
    }

    _setRangeCoordinates() {
        const rangeRect = this._rangeNode.getBoundingClientRect();
        const {left, right} = rangeRect;
        const rangeLength = right - left;

        this._leftRangeCoordinate = left;
        this._stepLength = rangeLength / this._stepsCount;
    }

    _onMouseDown(e) {
        if (!e.target.classList.contains('range__thumb')) return;
        
        window.addEventListener('mousemove', this._onMouseMove);
        window.addEventListener('touchmove', this._onMouseMove);
    }

    _onMouseMove(e) {
        const mouseX = e.pageX || e.changedTouches[0].pageX;        
        const mouseOffset = mouseX - this._leftRangeCoordinate;

        let value = Math.round(mouseOffset / this._stepLength) * this._step + this._min;

        if (value < this._min) value = this._min;
        if (value > this._max) value = this._max;
        
        this.value = value;
    }

    _onMouseUp() {
        window.removeEventListener('mousemove', this._onMouseMove);
    }

    _setThumbPosition() {
        const offset = (this._value - this._min) * this._stepLength / this._step;

        this._filled.style.width = offset + 'px';
        this._thumb.style.left = offset + 'px';
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;

        this._setThumbPosition();
        this._count.textContent = val;

        this.onChange && this.onChange(val);
    }
}