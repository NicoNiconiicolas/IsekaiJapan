document.getElementsByTagName('body')[0].innerHTML += "<img id='logo' src='img/basic.png' onclick='location.href=\"index.html\"'>"+
"<div id='menu'>"+
"<div id='home' class='menu-el' onclick='goto(\"home\")'>Accueil</div>"+
"<div id='initiation' class='menu-el' onclick='goto(\"initiation\")'>Introduction</div>"+
"<div id='jlpt' class='menu-el' onclick='goto(\"jlpt\")'>JLPT</div>"+
"<div id='outils' class='menu-el' onclick='goto(\"outils\")'>Outils</div></div>"+
"<div id='menu2'>"+
	"<div id='n5' class='menu-el' onclick='goto(\"n5\")'>JLPT N5</div>"+
	"<div id='n4' class='menu-el' onclick='goto(\"n4\")'>JLPT N4</div>"+
	"<div id='n3' class='menu-el' onclick='goto(\"404\")'>JLPT N3</div>"+
	"<div id='n2' class='menu-el' onclick='goto(\"404\")'>JLPT N2</div>"+
	"<div id='n1' class='menu-el' onclick='goto(\"404\")'>JLPT N1</div>"+
	"<div id='search'><input id='searchbar' type='text' placeholder='rechercher...'></input><button onclick='gotosearch()'>🔎</button></div>"+
"</div>";