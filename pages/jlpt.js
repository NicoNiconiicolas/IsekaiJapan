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
"<div id='main'><h1>JLPT</h1><br>"+
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