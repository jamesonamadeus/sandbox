	var X
	var randomvariable = X


function myfunction() {
// 	var a = document.getElementsByTagName("img")[0]
// 	var atts = new Array()
// 	atts["alt"] = a.getAttribute("alt");
// 	atts["title"] = a.getAttribute("title")
// 	atts["src"] = a.getAttribute("src")
// 	alert(atts["src"])
// }

// window.onload = function(){
// 	var img = document.getElementById("theimage")
// 	var src = img.getAttribute("src")
// 	var length = src.length - 4
// 	src = src.substring(0,length)
// 	img.setAttribute("alt", src)

	var img = document.getElementById("theimage")
	var thesrc = img.getAttribute("src")
	var length = thesrc.length - 9
	thesrc = thesrc.substring(length, length + 5)
if (thesrc == "thumb"){
	var oldsrc = img.getAttribute("src")
	img.setAttribute('src',oldsrc.substring(0, length) + "full.jpg")

	// img.setAttribute('src',"image-full.jpg")

} else {
	var oldsrc = img.getAttribute("src")
	img.setAttribute('src',oldsrc.substring(0, length + 1) + "image-thumb.jpg")

	// img.setAttribute('src',"image-thumb.jpg")
}
}