**Praca wykonana przez Krzysztofa Jurkowskiego i Maddoxa Berry'ego**

Praca pierwotnie została wysłana w terminie, jednakże z powodu wymagania odpowiedniej konfiguracji środowiska Node.js na komputerze została ona poprawiona, aby usunąć to wymaganie. Wszystkie funkcje są zgodne z chromium 49 bez modyfikacji środowiska wykonywalnego.

1. Kod musi zostać wykonany w środowisku przeglądarki

   ```javascript
   // in browser
   if (parseInt(prompt('Podaj liczbę')) % 2 == 0) alert("Podana liczba jest podzielna przez 2");
   else alert("Podana liczba nie jest podzielna przez 2")
   ```
2. Kod musi zostać wykonany w środowisku przeglądarki

   ```javascript
   // in browser
   let a = Math.floor(Math.random() * 100) + 1,
       b = Math.floor(Math.random() * 100) + 1,
       c = prompt('Wpisz znak działania, które chcesz wykonać')
   eval(`var d = ${a}${c}${b}`)
   console.log(`${a}${c}${b}=${d}`)
   ```
3. Kod musi zostać wykonany w środowisku przeglądarki
   Funkcja `multInHTML()` wymaga dwóch liczb jako argumenty

   ```javascript
   // invoke multInHTML(int, int)
   // in browser
   function multInHTML(a, b) {
   	document.write(`${a}*${b}=` + a * b)
   }
   ```
4. Kod wykonuje się samoczynnie

   ```javascript
   for (let i = 1, x; i <= 11; i++) {
       x = 1
       for (let j = i; j > 0; j--) { x *= 2 }
       console.log(x)
   }
   ```
5. Kod wykonuje się samoczynnie

   ```javascript
   let a = 3333
   while (a / 3 > 200) {
   	console.log(a)
   	a /= 3
   }
   ```
6. Przed wykonaniem kodu należy utworzyć zmienną `x`, która jest liczbą

   ```javascript
   // prowide x = int
   let i = 0, o
   do {
       o = 1
       for (let j = ++i; j > 0; j--) o *= x
       console.log(o)
   } while (i < 5)
   ```
7. Kod musi zostać wykonany w środowisku przeglądarki
   Fukcja `trojkatWeb()` nie wymaga argumentów

   ```javascript
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
   ```
8. Kod wykonuje się samoczynnie

   ```javascript
   for (let i = 1000; true; i--) {
       if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
           console.log(i);
           break;
       }
   }
   ```
9. Kod wykonuje się samoczynnie
   Tablica ma nazwę `arr`

   ```javascript
   let arr = []
   for (let n = 1; n <= 5; n++) arr.push(`książka ${n}`);
   ```
10. Kod nie ma wymagań środowiskowych
    Funkcja `f()` wymaga tablicy jako argumentu

    ```javascript
    // invoke f([array])
    function f(arr) {
        arr.unshift(arr.pop())
        return arr
    }
    ```
11. Kod nie ma wymagań środowiskowych
    Funkcja `srodek()` wymaga tablicy jako argumentu

    ```javascript
    // invoke srodek([array])
    function srodek(arr) {
        if (arr.length % 2 == 0) return (arr[arr.length / 2])
        else return arr[(arr.length - 1) / 2]
    }
    ```
12. Kod nie ma wymagań środowiskowych
    Funkcja `reverse()` wymaga tablicy jako argumentu

    ```javascript
    // invoke reverse([array])
    function reverse(arr) {
        return arr.reverse()
    }
    ```
13. Kod nie ma wymagań środowiskowych
    Funkcja `losuj()` wymaga tablicy jako argumentu

    ```javascript
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
    ```
14. Kod nie ma wymagań środowiskowych
    Funkcja `checkArray()` wymaga tablicy jako argumentu

    ```javascript
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
    ```
