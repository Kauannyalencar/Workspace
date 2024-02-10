const taxaDiaria = 89;
const fixa = 2000;

function diaria(taxaDiaria) {
    return taxaDiaria * 8;
}

function diasFixos(taxaDiaria, fixa) {
    return Math.floor(fixa / taxaDiaria)
}
