// let a = (1, 5)
// let b = (4, 9)
// function Min() {
//     if (a < b) {
//         return a;
//         return b;
//     }
// }
// console.log(Min());

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert(pow(x, n))
}