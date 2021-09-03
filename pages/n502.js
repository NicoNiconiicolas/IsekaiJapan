document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N5"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 2</h2>"+
		"<a href='index.html?p=n5/goi2' target='_blank'>第２語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #2</a>"+
		"<a href='index.html?p=n5/11' target='_blank'><span class='num'>#11</span>へ　｜　he</a>"+
		"<a href='index.html?p=n5/12' target='_blank'><span class='num'>#12</span>だけ　｜　dake</a>"+
		"<a href='index.html?p=n5/13' target='_blank'><span class='num'>#13</span>でも　｜　demo</a>"+
		"<a href='index.html?p=n5/14' target='_blank'><span class='num'>#14</span>どんな　｜　donna</a>"+
		"<a href='index.html?p=n5/15' target='_blank'><span class='num'>#15</span>どうして　｜　doushite</a>"+
		"<a href='index.html?p=n5/16' target='_blank'><span class='num'>#16</span>どうやって　｜　dou yatte</a>"+
		"<a href='index.html?p=n5/17' target='_blank'><span class='num'>#17</span>でしょう　｜　deshou</a>"+
		"<a href='index.html?p=n5/18' target='_blank'><span class='num'>#18</span>だろう　｜　darou</a>"+
		"<a href='index.html?p=n5/19' target='_blank'><span class='num'>#19</span>ちゃいけない・じゃいけない　<br class='br'><span class='tate'>｜</span>　cha ikenai・ja ikenai</a>"+
		"<a href='index.html?p=n5/20' target='_blank'><span class='num'>#20</span>があります　｜　ga arimasu</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n5menu.js';
document.getElementsByTagName('body')[0].appendChild(men);