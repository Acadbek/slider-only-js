window.addEventListener('DOMContentLoaded', () => {
    const block = document.querySelectorAll('.block'),
        wrapper = document.querySelector('.wrapper'),
        field = document.querySelector('.inner');

    let width = getComputedStyle(wrapper).width
    field.style.width = 100 * block.length + '%';
})

// `