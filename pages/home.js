document.getElementById('content').innerHTML = ""+
"<audio loop id=\"bgmplayer\">"+
	  "<source loop src=\"sound/brainmelting.mp3\" type=\"audio/mpeg\">"+
"</audio>"+
"<audio id=\"fartplayer\">"+
	  "<source src=\"\" type=\"audio/mpeg\">"+
"</audio>"+
"<audio loop id=\"bgmplayer2\">"+
	  "<source loop src=\"sound/n2.mp3\" type=\"audio/mpeg\">"+
"</audio>"+
"<audio loop id=\"bgmplayer3\">"+
	  "<source loop src=\"sound/n3.mp3\" type=\"audio/mpeg\">"+
"</audio>"+
"<audio loop id=\"bgmplayer4\">"+
	  "<source loop src=\"sound/n4.mp3\" type=\"audio/mpeg\">"+
"</audio>"+
"<audio loop id=\"bgmplayer5\">"+
	  "<source loop src=\"sound/n5.mp3\" type=\"audio/mpeg\">"+
"</audio>"+
"<div id='banner'>"+
	"<h1>"+
	"<img onclick='fart()' id='home-logo' src='img/logo-2.png'><br>"+
		"<span class='isekai'>異世界ジャパン</span><br>"+
		"<span class='elegant'>Isekai Japan</span>"+
	"</h1>"+
"</div>"+
"<div id='main'>"+
	"<h2>Finalement ! L'apprentissage du japonais en français</h2>"+
	"<ul>"+
	"<li>Envie d'apprendre le japonais ?</li>"+
	"<li>L'anglais n'est pas votre tasse de thé ?</li>"+
	"</ul><br>"+
	"<p>Si vous avez répondu par oui à ces 2 questions vous êtes tombé au bon endroit !</p><br>"+
	"<h2 class='squaaare' onclick='document.getElementById(\"bio\").style.display=\"block\"'>⇩ C'est quoi Isekai Japan ? ⇩</h2>"+
	"<div id='bio'>"+
		"<p>Isekai Japan est un site web entièrement consacré à l'apprentissage de la langue nippone.</p>"+
		"<p>Nos cours sont triés par niveau de JLPT et répartis en chapitres.</p>"+
		"<p class='u'>Chaque chapitre contient :</p>"+
		"<table>"+
		"<tr><td>・10 points de grammaire</td></tr>"+
		"<tr><td>・Des phrases d'exemple pour chacun de ces points</td></tr>"+
		"<tr><td>・Une liste de vocabulaire</td></tr>"+
		"<tr><td>・Des exercices interactifs(✖)</td></tr>"+
		"<tr><td>・Une courte séquence de roman visuel(✖)</td></tr>"+
		"</table>"+
		"<p>Le site étant encore en construction, les services listés ci-dessus ne sont pas tous disponibles à l'heure actuelle.</p>"+
		"<p>Aussi des outils aidant à l'apprentissage sont mis à disposition dans la rubrique du même nom.</p>"+
	"</div>"+
	"<h2 class='squaaare babyred' onmouseout='player5.pause()' onmouseover='player5.play()' onclick='location.href=\"index.html?p=n5\"'>JLPT N5 ➡</h2>"+
	"<h2 class='squaaare red' onmouseout='player4.pause()' onmouseover='player4.play()' onclick='location.href=\"index.html?p=404\"'>JLPT N4 ➡</h2>"+
	"<h2 class='squaaare darkred' onmouseout='player3.pause()' onmouseover='player3.play()' onclick='location.href=\"index.html?p=404\"'>JLPT N3 ➡</h2>"+
	"<h2 class='squaaare black' onclick='location.href=\"index.html?p=404\"' onmouseover='player2.play()' onmouseout='player2.pause()'>JLPT N2 ➡</h2>"+
	"<h2 class='squaaare rainbow' onmouseout='player.pause()' onmouseover='player.play()' onclick='location.href=\"index.html?p=404\"'>JLPT N1 ➡</h2>"+
"<br></div>";

var player = document.getElementById("bgmplayer");
var player2 = document.getElementById("bgmplayer2");
var player3 = document.getElementById("bgmplayer3");
var player4 = document.getElementById("bgmplayer4");
var player5 = document.getElementById("bgmplayer5");
var fartplayer = document.getElementById("fartplayer");
player.volume=0.1;
player2.volume=0.1;
player3.volume=0.1;
player4.volume=0.1;
player5.volume=1;

function fart(){
		var n = Math.floor(Math.random() * 1) + 1;
		document.getElementById("fartplayer").src = "sound/fart"+n+".mp3";
		fartplayer.play();
	}