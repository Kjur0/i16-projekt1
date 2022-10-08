// invoke trojkatWeb()
// in browser
function trojkatWeb() {
	let wys = parseInt(prompt('Wpisz wysokość'));
	var out = '';
	for (let x = 0; x < wys; x++) {
		for (let a = 0; a < (wys - x); a++) out = out + ' ';
		for (let b = 1 + (x * 2); b > 0; b--) out = out + 'X';
		console.log(out);
		out = ''
	}
}

/* OPTIONAL
// invoke trojkatNode(int)
// in Node.JS
function trojkatNode(wys) {
	for (let x = 0; x < wys; x++) {
		for (let a = 0; a < (wys - x); a++) process.stdout.write(' ');
		for (let b = 1 + (x * 2); b > 0; b--) process.stdout.write('X');
		process.stdout.write('\n')
	}
}
*/