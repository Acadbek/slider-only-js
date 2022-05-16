window.addEventListener('DOMContentLoaded', () => {
    const block = document.querySelectorAll('.block'),
        wrapper = document.querySelector('.wrapper'),
        field = document.querySelector('.inner');

    let width = getComputedStyle(wrapper);
    console.log(width)
})