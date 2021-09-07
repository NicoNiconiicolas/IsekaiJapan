document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N5"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 3</h2>"+
		"<a href='index.html?p=n5/goi3' target='_blank'>第３語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #3</a>"+
		"<a href='index.html?p=n5/21' target='_blank'><span class='num'>#21</span>がほしい　｜　ga hoshii</a>"+
		"<a href='index.html?p=n5/22' target='_blank'><span class='num'>#22</span>がいます　｜　ga imasu</a>"+
		"<a href='index.html?p=n5/23' target='_blank'><span class='num'>#23</span>ほうがいい　｜　hou ga ii</a>"+
		"<a href='index.html?p=n5/24' target='_blank'><span class='num'>#24</span>prochainement...</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n5menu.js';
document.getElementsByTagName('body')[0].appendChild(men);