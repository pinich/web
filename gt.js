function documentReady() {
	var gTElement = document.createElement('div');
	gTElement.id = "google_translate_element";

	var body = document.body;
	body.insertBefore(gTElement, body.firstChild);

	document.getElementById("google_translate_element").addEventListener("change", onLangChange, false);
	//document.querySelector("#google_translate_element a span").addEventListener("change", onLangChange, false),
	gtMini();

	createPopUp()
}

function onLangChange() {
	//option is selected
	try{
		document.getElementById("myModal").style.display="block";
	}catch(e){}

	var e = this.getElementsByTagName("select")[0];
	var txtValue = e.options[e.selectedIndex].text;
	ajax('index.html, function (xhr) {
		console.log("Selected Language: " + txtValue);
	}, null, null);

}
window.addEventListener("load", documentReady, false);

function createPopUp(){

	addCssToHead();
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	try{
		btn.onclick = function() {
			modal.style.display = "block";
		}
	}catch(e){}


	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	function addCssToHead(){
		var css = '.modal { display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); } .modal-content { position: relative; border-radius: 8px; background-color: #fefefe; margin: auto; padding: 0; border: 1px solid #888; width: 100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); -webkit-animation-name: animatetop; -webkit-animation-duration: 0.4s; animation-name: animatetop; animation-duration: 0.4s } @-webkit-keyframes animatetop { from {top:-300px; opacity:0} to {top:0; opacity:1} } @keyframes animatetop { from {top:-300px; opacity:0} to {top:0; opacity:1} } .close { color: #333333; float: left; font-size: 28px; font-weight: bold; opacity: 0.5; } .close:hover, .close:focus { color: #000; text-decoration: none; cursor: pointer; opacity: 1; } .modal-header { min-height: 16.428571429px; padding: 15px; border-bottom: 1px solid #e5e5e5; } .modal-body {padding: 2px 16px;}@media (min-width: 500px) {.modal-content{width:500px;}}@media (max-height: 400px) {.modal{padding-top: 45px;}}',
		    head = document.head || document.getElementsByTagName('head')[0],
		    style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);

		var body = document.body || document.getElementsByTagName('body')[0];
		var elmnt = document.createElement('div');
		elmnt.id = 'myModal';
		elmnt.className = 'modal';
		elmnt.innerHTML = '<div class="modal-content"> <div class="modal-header"> <span class="close">&times;</span> <h2 dir="rtl">Modal Header Text</h2> </div> <div class="modal-body"> <p style="font-size: large;" dir="rtl">Big Paragrph with all kind of DOM elements (Even pictuters can be inserted Here)<br></p></div> </div>';
		//var elmnt = document.createTextNode('<div id="myModal" class="modal"> </div>');
		body.appendChild(elmnt);
	}

}

function ajax(url, callback, data, x) {
	try {
		x = new (this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
		x.open(data ? 'POST' : 'GET', url, 1);
		x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		x.onreadystatechange = function () {
			x.readyState > 3 && callback && callback(x.responseText, x);
		};
		x.send(data)
	} catch (e) {
		window.console && console.log(e);
	}
}

//Google Translate
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'iw',
		//layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
		includedLanguages: 'ar,en,fr,am,ru',
	}, 'google_translate_element');
}
//google.translate.TranslateElement.FloatPosition.TOP_LEFT
//google.translate.TranslateElement.InlineLayout.SIMPLE

function gtMini() {
	var gtConstEvalStartTime = new Date();
	function d(b) {
		var a = document.getElementsByTagName("head")[0];
		a || (a = document.body.parentNode.appendChild(document.createElement("head")));
		a.appendChild(b)
	}
	function _loadJs(b) {
		var a = document.createElement("script");
		a.type = "text/javascript";
		a.charset = "UTF-8";
		a.src = b;
		d(a)
	}
	function _loadCss(b) {
		var a = document.createElement("link");
		a.type = "text/css";
		a.rel = "stylesheet";
		a.charset = "UTF-8";
		a.href = b;
		d(a)
	}
	function _isNS(b) {
		b = b.split(".");
		for (var a = window, c = 0; c < b.length; ++c)if (!(a = a[b[c]]))return !1;
		return !0
	}
	function _setupNS(b) {
		b = b.split(".");
		for (var a = window, c = 0; c < b.length; ++c)a.hasOwnProperty ? a.hasOwnProperty(b[c]) ? a = a[b[c]] : a = a[b[c]] = {} : a = a[b[c]] || (a[b[c]] = {});
		return a
	}
	window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded", function () {
		document.readyState = "complete"
	}, !1);
	if (_isNS('google.translate.Element')) {
		return
	}
	(function () {
		var c = _setupNS('google.translate._const');
		c._cest = gtConstEvalStartTime;
		gtConstEvalStartTime = undefined;
		c._cl = 'en';
		c._cuc = 'googleTranslateElementInit';
		c._cac = '';
		c._cam = '';
		c._ctkk = eval('((function(){var a\x3d764458617;var b\x3d846914135;return 411686+\x27.\x27+(a+b)})())');
		var h = 'translate.googleapis.com';
		var s = (true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http') + '://';
		var b = s + h;
		c._pah = h;
		c._pas = s;
		c._pbi = b + '/translate_static/img/te_bk.gif';
		c._pci = b + '/translate_static/img/te_ctrl3.gif';
		c._pli = b + '/translate_static/img/loading.gif';
		c._plla = h + '/translate_a/l';
		c._pmi = b + '/translate_static/img/mini_google.png';
		c._ps = b + '/translate_static/css/translateelement.css';
		c._puh = 'translate.google.com';
		_loadCss(c._ps);
		_loadJs(b + '/translate_static/js/element/main.js');
	})();
}
