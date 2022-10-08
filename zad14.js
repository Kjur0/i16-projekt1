// invoke checkString('string')
function checkString(str) {
	let tst = str.split('').reverse().join('')
	if (str == tst) { return true }
	else return false
}
// invoke checkArray([array:'string'])
function checkArray(arr) {
	return arr.some(checkString)
}