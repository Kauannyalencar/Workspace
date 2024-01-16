function pow(x, n) {
    let result = x

    for (let i = 1; i < n; i++){
        result *= x;
    }
    return result
}

let x = prompt('valor de x ?', '')
let n = prompt('Valor de n?', '')

if (n < 1) {
    alert(`Power ${n} não é suportado, use valores positivos`)
} else {
    alert( pow(x, n))
}