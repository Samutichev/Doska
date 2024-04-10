function appendPath() {
	const path = scene.appendChild(
		document.createElementNS('http://www.w3.org/2000/svg', 'path')
	)
	if (boardMode == 'pen') {
		path.setAttribute('stroke', colorOption)
		path.setAttribute('stroke-width', widthOption)
	} else if (boardMode == 'eraser') {
		path.setAttribute('stroke', 'white')
		path.setAttribute('stroke-width', widthOption * 5)
	}
	return path
}
function pointsToPath(points) {
	return (
		'M' +
		points
			.map(function (p) {
				return (
					(p.x || p[0] || 0).toFixed(0) +
					',' +
					(p.y || p[1] || 0).toFixed(0)
				)
			})
			.join('L')
	)
}

let points
let simplify2Path
let lockDrawing = false

board.onpointerdown = function (event) {
	if (!event.isPrimary) {
		lockDrawing = true
		simplify2Path.remove()
	}
	if (
		event.button == 0 &&
		!lockDrawing &&
		(boardMode == 'pen' || boardMode == 'eraser')
	) {
		points = [
			[
				(event.offsetX - transformX) / transformScale,
				(event.offsetY - transformY) / transformScale
			]
		]
		simplify2Path = appendPath()
		this.setPointerCapture(event.pointerId)
	}
}
board.onpointermove = function (event) {
	if (
		this.hasPointerCapture(event.pointerId) &&
		!lockDrawing &&
		(boardMode == 'pen' || boardMode == 'eraser')
	) {
		points.push([
			(event.offsetX - transformX) / transformScale,
			(event.offsetY - transformY) / transformScale
		])
		const simplifyJsApplied = simplify(
			points.map(function (p) {
				return { x: p[0], y: p[1] }
			}, 2.5),
			true
		)
		simplify2Path.setAttribute('d', pointsToPath(points))
		// simplify2Path.setAttribute('d', simplifySvgPath(simplifyJsApplied.map(function (p) { return [p.x, p.y] }), { tolerance: 2.5, precision: 0 }))
	}
	if (!event.isPrimary || event.buttons == 4) {
		scene.style.willChange = 'transform'
		background.style.willChange = 'background-position, background-size'
		board.style.shapeRendering = 'optimizeSpeed'
	}
}
board.onpointerup = function (event) {
	if (event.button == 0 && !lockDrawing && boardMode == 'pen') {
		if (this.hasPointerCapture(event.pointerId)) {
			points.push([
				(event.offsetX - transformX) / transformScale,
				(event.offsetY - transformY) / transformScale
			])
			const simplifyJsApplied = simplify(
				points.map(function (p) {
					return { x: p[0], y: p[1] }
				}, 2.5),
				true
			)
			simplify2Path.setAttribute(
				'd',
				simplifySvgPath(
					simplifyJsApplied.map(function (p) {
						return [p.x, p.y]
					}),
					{ tolerance: 2.5, precision: 0 }
				)
			)
			// emitObject(simplify2Path)
		}
	} else if (event.button == 0 && !lockDrawing && boardMode == 'eraser') {
		if (this.hasPointerCapture(event.pointerId)) {
			points.push([
				(event.offsetX - transformX) / transformScale,
				(event.offsetY - transformY) / transformScale
			])
			const simplifyJsApplied = simplify(
				points.map(function (p) {
					return { x: p[0], y: p[1] }
				}, 2.5),
				true
			)
			simplify2Path.setAttribute(
				'd',
				simplifySvgPath(
					simplifyJsApplied.map(function (p) {
						return [p.x, p.y]
					}),
					{ tolerance: 0, precision: 0 }
				)
			)
			// emitObject(simplify2Path)
		}
	}
	scene.style.willChange = 'auto'
	background.style.willChange = 'auto'
	board.style.shapeRendering = 'geometricPrecision'
	setTimeout(() => {
		lockDrawing = false
	}, 10)
}
