// invoke f([array])
function f(arr) {
    arr.unshift(arr.pop())
    return arr
}