//your JS code here. If required.
let sizeInfo = document.getElementById("sizeInfo")

window.addEventListener("load", (e) =>{
	sizeInfo.innerHTML = `Width: ${e.currentTarget.outerWidth} and Height: ${e.currentTarget.outerHeight}`
	
})

window.addEventListener("resize", (e) =>{
	sizeInfo.innerHTML = `Width: ${e.currentTarget.outerWidth} and Height: ${e.currentTarget.outerHeight}`
	
})