document.addEventListener('DOMContentLoaded', () => {
    const range = new Range({
        rangeNode: document.querySelector('.range'),
        min: 13,
        max: 69,
        step: 4,
        // value: 25
    });

    const socials = new Socials({
        socialsList: document.querySelectorAll('.checkbox__input_social'),
        designCheckbox: document.querySelector('.checkbox__input_design')
    });

    const flask = new Flask({
        flask: document.querySelector('.flask')
    })

    window.calculator = new Calculator({
        range,
        socials,
        flask,
        countContainer: document.querySelector('.calculator-section__total-count')
    });
})