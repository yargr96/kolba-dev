document.addEventListener('DOMContentLoaded', () => {
    const range = new Range({
        rangeNode: document.querySelector('.range'),
        min: 13,
        max: 69,
        step: 4,
        value: 21
    });

    const socials = new Socials({
        socialsList: document.querySelectorAll('.checkbox__input_social'),
        designCheckbox: document.querySelector('.checkbox__input_design')
    });

    const flask = new Flask({
        flask: document.querySelector('.flask')
    })

    new FlaskSection(document.querySelector('.calculator-section__flask-section'));

    new Calculator({
        range,
        socials,
        flask,
        countContainer: document.querySelector('.calculator-section__total-count')
    });

    popup({
        linkToPopupSelector: '.popup-link',
        closePopupSelector: '.close-popup',
        popupSelector: '#request-popup'
    });

    document.querySelectorAll('.request-form__input_phone').forEach(el => {
        const inputMask = new Inputmask('+7(999)999-99-99', {
            showMaskOnHover: false
        });
        
        inputMask.mask(el);
    })

    submitForm();
})