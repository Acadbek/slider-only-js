window.addEventListener('DOMContentLoaded', () => {
	const block = document.querySelectorAll('.block'),
		wrapper = document.querySelector('.wrapper'),
		field = document.querySelector('.wrapper__inner'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		current = document.querySelector('#current'),
		total = document.querySelector('#total'),
		offer = document.querySelector('.offer'),
		dots = [];

		let dom = document.querySelector('body');
		dom.style.backgroundColor = '#333';
		dom.style.color = '#fff';


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

	offer.style.position = 'relative';
	let indicator = document.createElement('ol');
	indicator.style.cssText = `
		position = absolute;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 15;
		display: flex;
		justify-content: center;
		margin-right: 15%;
		margin-left: 15%;
		list-style: none;
	`
	offer.append(indicator);

	for(let i = 0; i < block.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-index', i + 1);
		dot.style.cssText = `
			box-sizing: content-box;
			flex: 0 1 auto;
			width: 30px;
			height: 7px;
			margin-right: 3px;
			margin-left: 3px;
			cursor: pointer;
			background-color: #fff;
			background-clip: padding-box;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			opacity: 0.5;
			transition: opacity .7s ease;
		`
		
		if(i == 0) {
			dot.style.opacity = 1
		}
		indicator.append(dot);
		dots.push(dot)
	}

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

		dots.forEach(dot => dot.style.opacity = '0.5')
		dots[index - 1].style.opacity = 1
	})

	prev.addEventListener('click', () => {
		if(offset == 0) {
			offset = (+width.slice(0, width.length - 2) * (block.length - 1));
		} else{
			offset -= +width.slice(0, width.length - 2);
		}
		field.style.transform = `translateX(-${offset}px)`;

		if(index == 1) {
			index = block.length;
		} else{
			index--;
		}

		if(block.length < 10) {
			current.textContent = `0${index}`;
		} else{
			current.textContent = index;
		}

		dots.forEach(dot => dot.style.opacity = '0.5')
		dots[index - 1].style.opacity = 1
	})
	dots.forEach(dot => {
		dot.addEventListener('click', e => {
			const to = e.target.getAttribute('data-index');
			index = to
			offset = (+width.slice(0, width.length - 2) * (to - 1))
			field.style.transform = `translateX(-${offset}px)`

			if(block.length < 10) {
				current.textContent = `0${index}`;
			} else{
				current.textContent = index;
			}

			dots.forEach(dot => dot.style.opacity = '0.5')
			dots[index - 1].style.opacity = 1
			
		})
	})
})