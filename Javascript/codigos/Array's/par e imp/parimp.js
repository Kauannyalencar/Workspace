function parimpar(n) {
    for (let i = 0; i < n.length; i++) {
        if (valores[i] % 2 == 0) {
            console.log(`${valores[i]} é par`);
        } else {
            console.log(`${valores[i]} é impar`);
        }
    }
}

let valores = [1, 8, 6, 5, 2] 
let vetor = parimpar(valores)
