// Сlear board
function clearBoard() {
	board.style.transform = `scale(0.8)`
	board.style.opacity = 0
	setTimeout(() => {
		scene.innerHTML = ''
		board.style.opacity = 1
		board.style.transform = `scale(1)`
	}, 150)
}
document.addEventListener('keydown', function (event) {
	if (event.code == 'Delete') {
		clearBoard()
	}
})

options = {
	color: 0,
	size: 1,
	pattern: 0
}
// Change pen colors by scrolling
function scrollColor(event) {
	colorOptions = [
		'#000000',
		'#d01919',
		'#eaae00',
		'#16ab39',
		'#1678c2',
		customColor
	]
	if (event.deltaY > 0) {
		if (options.color < colorOptions.length - 1) {
			options.color += 1
		}
	} else {
		if (options.color) {
			options.color -= 1
		}
	}
	setBrush({ color: colorOptions[options.color] })
}
// Change size of drawing subject by scrolling
function scrollSize(event) {
	sizeOptions = [3, 4, 5]
	if (event.deltaY > 0) {
		if (options.size < sizeOptions.length - 1) {
			options.size += 1
		}
	} else {
		if (options.size) {
			options.size -= 1
		}
	}
	setBrush({ size: sizeOptions[options.size] })
}
// Change board patterns by scrolling
function scrollPattern(event) {
	patternOptions = ['none', 'sq', 'line', 'dot']
	if (event.deltaY > 0) {
		if (options.pattern < patternOptions.length - 1) {
			options.pattern += 1
		}
	} else {
		if (options.pattern) {
			options.pattern -= 1
		}
	}
	setPattern(patternOptions[options.pattern])
}

// Copy page link
function copyLink() {
	navigator.clipboard
		.writeText(window.location.href)
		.then(() => {
			// Link copied successfully!
		})
		.catch((err) => {
			console.log('Something went wrong', err)
		})
}
document.addEventListener('keydown', function (event) {
	if (event.code == 'KeyC' && (event.ctrlKey || event.metaKey)) {
		copyLink()
	}
})

// Effects
// "Fade in"
const fadeIn = (cl, timeout) => {
	let element = document.querySelector(cl)
	element.style.opacity = 0
	element.style.display = 'flex'
	element.style.transition = `opacity ${timeout}ms`
	setTimeout(() => {
		element.style.opacity = 1
	}, 10)
}
// "Fade out"
const fadeOut = (cl, timeout) => {
	let element = document.querySelector(cl)
	element.style.opacity = 1
	element.style.transition = `opacity ${timeout}ms`
	element.style.opacity = 0

	setTimeout(() => {
		element.style.display = 'none'
	}, timeout)
}
