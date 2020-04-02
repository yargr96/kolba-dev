class Calculator {
    constructor({range, socials, flask, countContainer}) {
        this._range = range;
        this._socials = socials;
        this._flask = flask;
        this._countContainer = countContainer;

        this._onChange = this._onChange.bind(this);
        range.onChange = this._onChange;
        socials.onChange = this._onChange;

        this._setMaxPrice();
        this._render();
    }

    _onChange() {
        this._render();
    }

    _render() {
        this._countContainer.textContent = this.priceFormatted;
        this._flask.fullness = this._priceFullness;
    }

    _setMaxPrice() {
        const postsCount = this._range.max;
        const socialsCount = this._socials.totalCount;

        this._maxPrice = (socialsCount - (socialsCount - 1) / 2) * (postsCount * 400) + postsCount * 400;
    }

    get price() {
        const postsCount = this._range.value;
        const {count: socialsCount, designDecoration} = this._socials.value;

        if (!socialsCount) return 0;
        
        let designPrice = 0;
        if (designDecoration) designPrice = postsCount * 400;

        return (socialsCount - (socialsCount - 1) / 2) * (postsCount * 400) + designPrice;
    }

    get priceFormatted() {
        let i = 0;

        return String(this.price).split('').reduceRight((acc, char) => {
            i++;
            
            if (i % 3 === 0) return char + " " + acc;
            return char + acc;
        })
    }

    get _priceFullness() {
        return this.price / this._maxPrice;
    }
}