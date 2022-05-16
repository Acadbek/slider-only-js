window.addEventListener('DOMContentLoaded', () => {
	const block = document.querySelectorAll('.block'),
		wrapper = document.querySelector('.wrapper'),
		field = document.querySelector('.wrapper__inner'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		current = document.querySelector('#current'),
		total = document.querySelector('#total');

	let index = 1;
	let offset = 0;
	let width = getComputedStyle(wrapper).width;

	field.style.width = 100 * block.length + '%';
	field.style.display = 'flex';
	field.style.transition = '0.5s all';
	wrapper.style.overflow = 'hidden';

	if(block.length < 10) {
		total.textContent = `0${block.length}`;
		current.textContent = `0${index}`;
	} else{
		total.textContent = block.length;
		current.textContent = index;
	}

	block.forEach(slide => {
		slide.style.width = width;
	})

	next.addEventListener('click', () => {
		if(offset == (+width.slice(0, width.length - 2) * (block.length - 1))) {
			offset = 0;
		} else{
			offset += +width.slice(0, width.length - 2)
		}
		field.style.transform = `translateX(-${offset}px)`

		if(index == block.length) {
			index = 1
		} else{
			index++
		}

		if(block.length < 10) {
			current.textContent = `0${index}`;
		} else{
			current.textContent = index;
		}
	})

	prev.addEventListener('click', () => {
		if(offset == 0) {
			offset = (+width.slice(0, width.length - 2) * (block.length - 1))
		} else{
			offset -= +width.slice(0, width.length - 2)
		}
		field.style.transform = `translateX(-${offset}px)`

		if(index == 1) {
			index = block.length
		} else{
			index--
		}

		if(block.length < 10) {
			current.textContent = `0${index}`;
		} else{
			current.textContent = index;
		}
	})















})

// `