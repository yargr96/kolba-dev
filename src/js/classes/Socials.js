class Socials {
    constructor({socialsList, designCheckbox, onChange}) {
        this._socialsList = socialsList;
        this._designCheckbox = designCheckbox;

        if (onChange) this.onChange = onChange;

        this._onSocialsChange = this._onSocialsChange.bind(this);
        this._onDesignDecorationChange = this._onDesignDecorationChange.bind(this);

        this._socialsList.forEach(checkbox => {
            checkbox.addEventListener('change', this._onSocialsChange);
        })

        this._designCheckbox.addEventListener('change', this._onDesignDecorationChange);

        this._checkSocials();
        this._checkDesignDecoration();
    }

    _checkSocials() {
        let count = 0;

        this._socialsList.forEach(checkbox => {
            if (checkbox.checked) count++;
        });

        this._socialsCount = count;
    }

    _checkDesignDecoration() {
        this._designDecoration = this._designCheckbox.checked;
    }

    _onSocialsChange() {
        this._checkSocials();
        this.onChange && this.onChange(this.value);
    }

    _onDesignDecorationChange() {
        this._checkDesignDecoration();
        this.onChange && this.onChange(this.value);
    }

    get value() {
        return {
            count: this._socialsCount,
            designDecoration: this._designDecoration
        }
    }

    get totalCount() {
        return this._socialsList.length;
    }
}