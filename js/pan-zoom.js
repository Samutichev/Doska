let instance = panzoom(scene, {
	maxZoom: 1.6,
	minZoom: 0.1,
	zoomSpeed: 0.08,
	beforeMouseDown: function (e) {
		let shouldIgnore = !e.button
		return shouldIgnore
	}
})

instance.on('transform', function () {
	background.style.backgroundPositionX = `${transformX}px`
	background.style.backgroundPositionY = `${transformY}px`
	background.style.backgroundSize = `${55 * transformScale}px`
})
