// invoke srodek([array])
function srodek(arr) {
    if (arr.length % 2 == 0) return (arr[arr.length / 2])
    else return arr[(arr.length - 1) / 2]
}