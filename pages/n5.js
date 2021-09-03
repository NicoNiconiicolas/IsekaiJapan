document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N5"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 1</h2>"+
		"<a href='index.html?p=n5/goi1' target='_blank'>第１語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #1</a>"+
		"<a href='index.html?p=n5/1' target='_blank'><span class='num'>#1</span>は　｜　wa</a>"+
		"<a href='index.html?p=n5/2' target='_blank'><span class='num'>#2</span>です　｜　desu</a>"+
		"<a href='index.html?p=n5/3' target='_blank'><span class='num'>#3</span>を　｜　wo</a>"+
		"<a href='index.html?p=n5/4' target='_blank'><span class='num'>#4</span>か　｜　ka</a>"+
		"<a href='index.html?p=n5/5' target='_blank'><span class='num'>#5</span>も　｜　mo</a>"+
		"<a href='index.html?p=n5/6' target='_blank'><span class='num'>#6</span>で　｜　de</a>"+
		"<a href='index.html?p=n5/7' target='_blank'><span class='num'>#7</span>が　｜　ga</a>"+
		"<a href='index.html?p=n5/8' target='_blank'><span class='num'>#8</span>の　｜　no</a>"+
		"<a href='index.html?p=n5/9' target='_blank'><span class='num'>#9</span>に　｜　ni</a>"+
		"<a href='index.html?p=n5/10' target='_blank'><span class='num'>#10</span>と　｜　to</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n5menu.js';
document.getElementsByTagName('body')[0].appendChild(men);