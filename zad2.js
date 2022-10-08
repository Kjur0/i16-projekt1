// in browser
let a = Math.floor(Math.random() * 100) + 1,
    b = Math.floor(Math.random() * 100) + 1,
    c = prompt('Wpisz znak działania, które chcesz wykonać')
eval(`var d = ${a}${c}${b}`)
console.log(`${a}${c}${b}=${d}`)