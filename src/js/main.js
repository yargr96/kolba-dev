document.addEventListener('DOMContentLoaded', () => {
    const range = new Range({
        rangeNode: document.querySelector('.range'),
        min: 13,
        max: 69,
        step: 4,
        value: 25
    });

    range.onChange = val => console.log(val);
})