var div_tog="btn_make";
var div_text_tog="btn_make_text";

//-----------------------상단 메뉴 컨트롤
// 색상
function div_color(){
	
	var tog = document.getElementById('control_color').style.display;
	
	/* close other menu */
	document.getElementById('control_border').style.opacity= '0';
	setTimeout("document.getElementById('control_border').style.display='none';",400);
	document.getElementById('control_text').style.opacity= '0';
	setTimeout("document.getElementById('control_text').style.display='none';",400);
	/* close other menu */
	
	/* open & close this menu */
	if(tog=="none"){
		document.getElementById('control_color').style.display="block";
		setTimeout("document.getElementById('control_color').style.opacity= '1';",50);
	} else {
		document.getElementById('control_color').style.opacity= '0';
		setTimeout("document.getElementById('control_color').style.display='none';",400);
	}
	/* open & close this menu */
}

// 테두리
function div_border(){

	var tog = document.getElementById('control_border').style.display;
	
	/* close other menu */
	document.getElementById('control_color').style.opacity= '0';
	setTimeout("document.getElementById('control_color').style.display='none';",400);
	document.getElementById('control_text').style.opacity= '0';
	setTimeout("document.getElementById('control_text').style.display='none';",400);
	/* close other menu */
	
	/* open & close this menu */
	if(tog=="none"){
		document.getElementById('control_border').style.display="block";
		setTimeout("document.getElementById('control_border').style.opacity= '1';",50);
	} else {
		document.getElementById('control_border').style.opacity= '0';
		setTimeout("document.getElementById('control_border').style.display='none';",400);
	}
	/* open & close this menu */
}

// 텍스트
function div_text(){

	var tog = document.getElementById('control_text').style.display;
	
	/* close other menu */
	document.getElementById('control_color').style.opacity= '0';
	setTimeout("document.getElementById('control_color').style.display='none';",400);
	document.getElementById('control_border').style.opacity= '0';
	setTimeout("document.getElementById('control_border').style.display='none';",400);
	/* close other menu */
	
	/* open & close this menu */
	if(tog=="none"){
		document.getElementById('control_text').style.display="block";
		setTimeout("document.getElementById('control_text').style.opacity= '1';",50);
	} else {
		document.getElementById('control_text').style.opacity= '0';
		setTimeout("document.getElementById('control_text').style.display='none';",400);
	}
	/* open & close this menu */
}
//-----------------------상단 메뉴 컨트롤


//-----------------------색상 메뉴

function setboxColor(picker) {
	document.getElementById(div_tog).style.backgroundColor = '#' + picker.toString()
}

//-----------------------색상 메뉴


//-----------------------테두리 메뉴

//색상
function setBorderColor(picker) {
	document.getElementById(div_tog).style.borderColor = '#' + picker.toString()
}

//굵기
function setBorderWidth() {
	var borderwidth = document.getElementById('chosen-border').value;
	document.getElementById(div_tog).style.borderWidth = borderwidth.toString() + 'px';
}

//둥글게
function setBorderRadius() {
	var borderradius = document.getElementById('chosen-radius').value;
	document.getElementById(div_tog).style.borderRadius = borderradius.toString() + 'px';
}

//스타일
function setBorderStyle() {
	var sel = document.getElementById("BStyle").value;

	var tmp = document.getElementById(div_tog).style.borderColor;
	document.getElementById(div_tog).style.borderColor = "#fff";
	setTimeout(function(){
		document.getElementById(div_tog).style.borderStyle = "none";
	}, 100)
	setTimeout(function(){
		document.getElementById(div_tog).style.borderStyle = sel;
		document.getElementById(div_tog).style.borderColor = tmp;
	}, 400)
}

//-----------------------테두리 메뉴


//-----------------------텍스트 메뉴

//크기
function setTextSize() {
	var buttontextsize = document.getElementById('chosen-text-size').value;
	document.getElementById(div_text_tog).style.fontSize = buttontextsize.toString() + 'px';
}

//내용
function setText() {
	var buttontext = document.getElementById('chosen-text').value;
	document.all(div_text_tog).innerHTML=buttontext.toString();
}

//정렬
function setTextAlign() {
	var sel = document.getElementById("tAlign").value;
	document.getElementById(div_text_tog).style.textAlign = sel;
}

//색상
function setTextColor(picker) {
	document.getElementById(div_text_tog).style.color = '#' + picker.toString();
}

//-----------------------텍스트 메뉴





//-----------------------코드 반환

function returnCode() {
	var tmp = document.getElementById('makingtool').innerHTML;
	tmp=tmp.replace(/<div class="ui-resizable-handle ui-resizable-e" unselectable="on" style="display: none; opacity: 1;"><\/div><div class="ui-resizable-handle ui-resizable-s" unselectable="on" style="display: none; opacity: 1;"><\/div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 1001; display: none; opacity: 1;" unselectable="on"><\/div>/gi,"");
	tmp=tmp.replace(/draggable ui-draggable ui-resizable ui-resizable-autohide/gi,"");
	tmp=tmp.replace(/<div class="ui-resizable-handle ui-resizable-e" unselectable="on" style="display: none;"><\/div><div class="ui-resizable-handle ui-resizable-s" unselectable="on" style="display: none;"><\/div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 1001; display: none;" unselectable="on"><\/div><\/div>/gi,"");
	tmp=tmp.replace(/"btn_make "/gi,'"btn_make"');
	document.getElementById('return_code_area_html').innerHTML=tmp;
}

function returnCode1() {
	
	// css 부분
	// BUTTON
	var div_width = document.getElementById(div_tog).style.width;
	var div_height = document.getElementById(div_tog).style.height;
	var div_display = document.getElementById(div_tog).style.display;
	var div_background = document.getElementById(div_tog).style.backgroundColor;
	var div_borderStyle = document.getElementById(div_tog).style.borderStyle;
	var div_borderWidth = document.getElementById(div_tog).style.borderWidth;
	var div_borderColor = document.getElementById(div_tog).style.borderColor;
	var div_borderRadius = document.getElementById(div_tog).style.borderRadius;
	
	// TEXT
	var div_textAlign = document.getElementById(div_text_tog).style.textAlign;
	var div_textDisplay = document.getElementById(div_text_tog).style.display;
	var div_verticalAlign = document.getElementById(div_text_tog).style.verticalAlign;
	var div_textFontsize = document.getElementById(div_text_tog).style.fontSize;
	var div_textColor = document.getElementById(div_text_tog).style.color;
	
	document.getElementById('return_code_area_css').innerHTML=
	".btn_make {" + '\r\n' +
	"	width: " + div_width + ";\r\n" + 
	"	height: " + div_height + ";\r\n" +
	"	display: " + div_display + ";\r\n" +
	"	background-color: " + div_background + ";\r\n" +
	"	border-style: " + div_borderStyle + ";\r\n" + 
	"	border-width: " + div_borderWidth + ";\r\n" +
	"	border-color: " + div_borderColor + ";\r\n" + 
	"	border-radius: " + div_borderRadius + ";\r\n" +
	"}\r\n\r\n" +
	".btn_make_text {" + '\r\n' +
	"	text-align: " + div_textAlign + ";\r\n" +
	"	display: " + div_textDisplay + ";\r\n" +
	"	vertical-align: " + div_verticalAlign + ";\r\n" +
	"	font-size: " + div_textFontsize + ";\r\n" +
	"	color: " + div_textColor + ";\r\n" +
	"}";
	
	
	// HTML 부분
	document.getElementById('return_code_area_html').innerHTML=
	"<div class='btn_make'>\r\n" +
	"	<div class='btn_make_text'>\r\n" +
	"		" + document.getElementById(div_text_tog).innerHTML + "\r\n" +
	"	</div>\r\n" +
	"</div>";
}
	
//-----------------------코드 반환


//-----------------------대상 DIV 바꾸기


function change_tog(a,b) {
	div_tog=a;
	div_text_tog=b;
	//alert(div_tog + " 와 " + div_text_tog +"로 변경");
}


//-----------------------대상 DIV 바꾸기