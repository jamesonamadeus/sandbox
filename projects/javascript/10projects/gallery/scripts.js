function myfunction() {
	var a = document.getElementsByTagName("img")[0]
	var atts = new Array()
	atts["alt"] = a.getAttribute("alt");
	atts["title"] = a.getAttribute("title")
	atts["src"] = a.getAttribute("src")
	alert(atts["src"])


}