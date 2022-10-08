// invoke losuj([array])
function losuj(inp) {
	let out = [],
		arr = inp
	for (let i = arr.length, tmp; i > 0; i--) {
		tmp = arr.splice(Math.floor(Math.random() * i), 1)
		out.push(tmp.pop())
	}
	return out
}