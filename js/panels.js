let activePanel = false

// Brush color panel
color.onclick = function () {
	if (activePanel === false) {
		fadeIn('#colors', 200)
		setTimeout(() => {
			activePanel = true
		}, 200)
	} else {
		fadeOut('#colors', 200)
		setTimeout(() => {
			activePanel = false
		}, 200)
	}
}
colorInput.onpointerenter = function () {
	activePanel = false
}
colorInput.onpointerleave = function () {
	activePanel = true
}

// Brush size panel
size.onclick = function () {
	if (activePanel === false) {
		fadeIn('#sizes', 200)
		setTimeout(() => {
			activePanel = true
		}, 200)
	} else {
		fadeOut('#sizes', 200)
		setTimeout(() => {
			activePanel = false
		}, 200)
	}
}

// Canvas pattern panel
pattern.onclick = function () {
	if (activePanel === false) {
		fadeIn('#patterns', 200)
		setTimeout(() => {
			activePanel = true
		}, 200)
	} else {
		fadeOut('#patterns', 200)
		setTimeout(() => {
			activePanel = false
		}, 200)
	}
}

document.getElementsByTagName('body')[0].onclick = function () {
	if (activePanel === true) {
		fadeOut('#colors', 200)
		fadeOut('#sizes', 200)
		fadeOut('#patterns', 200)
		setTimeout(() => {
			activePanel = false
		}, 200)
	}
}
