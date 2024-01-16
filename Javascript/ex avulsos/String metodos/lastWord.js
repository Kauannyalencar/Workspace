//Primeira e última  letra de uma string
const line = "Mudanças levam tempo e nem sempre vemos o resultado de nossas ações";

function firtLetter(line) {
    return line[0]
}

console.log(firtLetter(line));

function lastLetter(line) {
    return line.slice(-1).toUpperCase()
}

console.log(lastLetter(line));