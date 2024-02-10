const tempoDePreparo = 40
const tempoReal = 30;
function restanteNoForno(tempoReal) {
    return tempoDePreparo - tempoReal;
}

fazendo = 5;

tempoTotal = (tempoDePreparo, fazendo) => {
   return tempoDePreparo + fazendo
}

console.log(tempoTotal(tempoDePreparo, fazendo));