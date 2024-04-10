// Default brush settings
let boardMode = 'pen'
let widthOption = 4
let colorOption = 'black'

// Change tool
function changeAction(target) {
	;['eraser', 'pen'].forEach((action) => {
		const t = document.getElementById(action)
		t.classList.remove('active')
	})
	if (typeof target === 'string') target = document.getElementById(target)
	target.classList.add('active')
	switch (target.id) {
		case 'pointer':
			boardMode = 'pointer'
			applyDraggable()
			break
		case 'eraser':
			boardMode = 'eraser'
			color.style.pointerEvents = 'none'
			color.style.opacity = 0.2
			break
		case 'pen':
			boardMode = 'pen'
			color.style.pointerEvents = 'auto'
			color.style.opacity = 1
			break
		default:
			break
	}
}

// Brush settings
function setBrush(option) {
	// Size settings
	if (option.size !== undefined) {
		widthOption = option.size
		document
			.querySelector('#sizes button.active')
			.classList.remove('active')
	}
	switch (option.size) {
		case 3:
			size.style.backgroundSize = '50%'
			small.classList.add('active')
			break
		case 4:
			size.style.backgroundSize = '76%'
			medium.classList.add('active')
			break
		case 5:
			size.style.backgroundSize = '110%'
			large.classList.add('active')
			break
		default:
			break
	}
	// Color settings
	if (option.color !== undefined) {
		let val = option.color
		colorOption = val
		color.style.backgroundColor = val
	}
}
customColor = 'black'
colorInput.onchange = function () {
	setBrush({ color: colorInput.value })
	customColor = colorInput.value
}

// Set canvas pattern
let currentPattern = 'none'
function setPattern(name) {
	background.style.backgroundImage = `url('assets/patterns/pattern_${name}.svg')`
	pattern.style.backgroundImage = `url('assets/icons/${name}.svg')`
	document.querySelector('#patterns button.active').classList.remove('active')
	document.getElementById(name).classList.add('active')
	currentPattern = name
}
setPattern('none')
