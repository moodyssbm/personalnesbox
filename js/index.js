let link = document.getElementById('link');



let games = ['bamsnes', 'bok2', 'ddsmt', 'dwm', 'ff1-2', 'ffta', 'femnn', 'kdl3', 'marpic', 'mono', 'mtlb2', 'mrbcgb', 'eb0', 'pdp', 'pkmncrystal', 'pkmnemerald', 'pkmnlg', 'pkmnprism', 'pkmntcg', 'rbibb', 'shaqfu', 'smw'];



function makeGame(name) {

	let phrase = '';

	phrase += '<div class="rupee"><a href="./roms/';

	phrase += name;

	phrase += '.html"><img src="./roms/';

	phrase += name;

	phrase += '.png" /></a></div>';

	return phrase;

}



for(i=0; i!=games.length; i++) {

	link.innerHTML += makeGame(games[i]);

}



$(document).ready(function() {

	$('.rupee').mouseenter(function() {

		$(this).fadeTo('fast', 1);

	});

	$('.rupee').mouseleave(function() {

		$(this).fadeTo('fast', 0.5);

	});

});