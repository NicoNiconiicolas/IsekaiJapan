document.getElementById('content').innerHTML = ""+
"<div id='main'>"+
	"<div id='chapbox'>"+
		"<h1>"+
			"JLPT N5"+
		"</h1>"+
		"<div id='ch-menu'></div>"+
		"<h2 class='chap'>Chapitre 4</h2>"+
		"<a href='index.html?p=n5/goi4' target='_blank'>第４語彙一覧表　<span class='tate'>｜</span><br class='br'>　liste de vocabulaire #4</a>"+
		"<a href='index.html?p=n5/31' target='_blank'><span class='num'>#31</span>けれども　｜　keredomo</a>"+
		"<a href='index.html?p=n5/32' target='_blank'><span class='num'>#32</span>まだ ｜ mada</a>"+
		"<a href='index.html?p=n5/33' target='_blank'><span class='num'>#33</span>まで ｜ made</a>"+
		"<a href='index.html?p=n5/34' target='_blank'><span class='num'>#34</span>もう ｜ mou</a>"+
		"<a href='index.html?p=n5/35' target='_blank'><span class='num'>#35</span>前に ｜ mae ni</a>"+
		"<a href='index.html?p=n5/36' target='_blank'><span class='num'>#36</span>ませんか ｜ masen ka</a>"+
		"<a href='index.html?p=n5/37' target='_blank'><span class='num'>#37</span>ましょう ｜ mashou</a>"+
		"<a href='index.html?p=n5/38' target='_blank'><span class='num'>#38</span>en préparation...</a>"+
	"</div>"+
	"<br><br><br><br><br>"+
"</div>";

var men = document.createElement('script');
men.src = 'model/n5menu.js';
document.getElementsByTagName('body')[0].appendChild(men);