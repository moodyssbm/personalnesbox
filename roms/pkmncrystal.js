// main var
let table = document.getElementById('pokLoc');

// locations
function r(route) { return 'Route ' + route; }
function c(city) { return city + ' City'; }
const s = 'Safari Zone';
const b = 'Burned Tower';
function e(pok) { return 'Evolution of ' + pok; }
const t = 'in-game trade';

// timestamps
const m = 'Morning';
const d = 'Day';
const n = 'Night';
const a = 'All Day';

// notes
const x = 'n/a';
const w = 'in water';
function l(lvl) { return '@ Level ' + lvl; }
const p = 'Special Post-Game Event';
function z(stone) { return 'w/ a ' + stone + ' Stone'; }

// params for pokedex:
// 0 -> Location of the Mon
// 1 -> Time of day available
// 2 -> Location notes like in water only or whatever

const pokedex = {
	Bulbasaur: [r(21), n, x],
	Charmander: [s,d,x],
	Squirtle: [c('Fuchsia'), a, w],
	Vulpix: [r('7 & 8'), m, x],
	Mankey: [r(22), d, x],
	Alakazam: [e('Kadabra'), a, l(36)],
	Machamp: [e('Machoke'), a, l(48)],
	Golem: [e('Graveler'), a, l(45)],
	Gengar: [e('Haunter'), a, l(45)],
	Omanyte: [s,m,x],
	Kabuto: [s,n,x],
	Aerodactyl: [t,a,x],
	Articuno: [t,a,x],
	Zapdos: [t,a,x],
	Moltres: [t,a,x],
	Mewtwo: [t,a,x],
	Mew: [t,a,x],
	Chikorita: [r(39), n, x],
	Cyndaquil: [b, m, x],
	Totodile: [c('Ecruteak'), a, w],
	Mareep: [r('42 & 43'), m, x],
	Politoed: [e('Poliwhirl'), a, l(45)],
	Slowking: [e('Slowpoke'), a, z('Water')],
	Girafarig: [r(43), n, x],
	Steelix: [e('Onix'), a, l(35)],
	Scizor: [e('Scyther'), a, l(25)],
	Remoraid: [r(44), a, w],
	Kingdra: [e('Seadra'), a, l(52)],
	Porygon2: [e('Porygon'), a, l(35)],
	Celebi: [c('Goldenrod'), a, p],
}

function doTheThing() {
	table.innerHTML = '<tr><td> </td><td><b>Location</b></td><td><b>Time</b></td><td><b>Notes</b></td></tr>';
	for(var p in pokedex) {
		table.innerHTML += '<tr><td><b>' + p + '</b></td><td>' + pokedex[p][0] + '</td><td>' + pokedex[p][1] + '</td><td>' + pokedex[p][2] + '</td></tr>';
	}
}

doTheThing();