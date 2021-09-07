document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N5"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 9</h2>"+
		"<a href='index.html?p=n5/goi9' target='_blank'>第９語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #9</a>"+
		"<a href='index.html?p=n5/81' target='_blank'><span class='num'>#81</span>文法　｜　grammaire</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n5menu.js';
document.getElementsByTagName('body')[0].appendChild(men);