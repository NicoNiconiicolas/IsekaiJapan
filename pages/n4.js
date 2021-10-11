document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N4"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 1</h2>"+
		"<a href='index.html?p=n4/goi1' target='_blank'>第１語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #1</a>"+
		"<a href='index.html?p=n4/1' target='_blank'><span class='num'>#1</span>à venir...</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n4menu.js';
document.getElementsByTagName('body')[0].appendChild(men);