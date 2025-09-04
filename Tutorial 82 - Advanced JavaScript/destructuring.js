let arr = [1, 6, 11, 15];
let [a, b] = arr
console.log(a)
console.log(b)

let [x, y, ...rest] = [1, 6, 11, 15, 20, 30, 40];
console.log(x)
console.log(y)
console.log(rest)

let obj = {
    a : 1,
    b : 6,
    c : 11
}
let {a, b} = obj;
console.log(a)
console.log(b)

let obj = {
    a : 1,
    b : 6,
    c : 11,
    d : 15
}
let {a, b, ...rest} = obj;
console.log(a)
console.log(b)
console.log(rest)