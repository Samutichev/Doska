// Export SVG
const exportBoardAsSVG = () => {
	svgExport.downloadSvg(document.getElementById('board'), 'board', {
		width: 200,
		height: 200
	})
}
