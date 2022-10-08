// prowide x = int
let i = 0, o
do {
    o = 1
    for (let j = ++i; j > 0; j--) o *= x
    console.log(o)
} while (i < 5)