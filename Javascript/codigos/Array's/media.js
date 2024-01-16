const arra = [90, 70, 90];
console.log(media(arra));
function media(notas) {
    const media = calcularMedia(notas)
        if (media < 59) return"f"
        if (media < 69) return "D"
        if(media < 79) return "C"
        if (media < 89) return "B"
        return "A"
}

function calcularMedia(arra) {
    let soma = 0;
    for(let valor of arra) {
        soma += valor;
    }
    return soma/(arra.length)
}