const popup = ({ linkToPopupSelector, closePopupSelector, popupSelector}) => {
    const linksToPopup = document.querySelectorAll(linkToPopupSelector);
    const closePopupItems = document.querySelectorAll(closePopupSelector);
    const popup = document.querySelector(popupSelector);
    const pageWrapper = document.querySelector('.page-wrapper');

    const requestForm = document.querySelector('.request-form');
    const thankyou = document.querySelector('.thankyou');
    const error = document.querySelector('.error');
    const formInputs = document.querySelectorAll('.request-form__input');

    const clearPopup = () => {
        requestForm.style.display = null;
        thankyou.style.display = "none";
        error.style.display = "none";
        formInputs.forEach(input => input.value = '');
    }

    const openPopup = () => {
        clearPopup();

        popup.style.display = null;
        requestAnimationFrame(() => popup.classList.add('active'));

        const scrollBarWidth = window.innerWidth - document.body.getBoundingClientRect().width;

        pageWrapper.classList.add('page-wrapper_blured');
        document.body.classList.add('overflow-hidden');
        document.documentElement.classList.add('overflow-hidden');
        document.body.style.paddingRight = scrollBarWidth + 'px';
    };

    const closePopup = () => {
        popup.classList.remove('active');
        pageWrapper.classList.remove('page-wrapper_blured');

        setTimeout(() => {
            popup.style.display = 'none';
            document.body.classList.remove('overflow-hidden');
            document.documentElement.classList.remove('overflow-hidden');
            document.body.style.paddingRight = null;
        }, 200)
    }
    

    linksToPopup.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            openPopup();
        })
    });

    closePopupItems.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            closePopup()
        })        
    });
}