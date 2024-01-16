const line = {
    Nome: "Cc",
    ano: 1983,
    lugar: "Fazbeer Family Dinner"
};



function maiuscula(line) {
    return line.Nome.slice(0).toUpperCase() + " dies in " + line.ano
}

console.log(maiuscula(line));

