const res = document.querySelector("#res")
let num = document.querySelector("#valor")
const btn = document.querySelector(".btn")
let valores = [];


console.log(valores);
btn.addEventListener("click", () => {
    if (valores.length == 0) {
        window.alert("Adicionar valores antes de finalizar")
    } else {
        let total = valores.length;
        let maior = valores[0]
        let somaP = 0;
        let somaN = 0;
        let media = 0;
        for (const pos in valores) {
            somaP += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
        }
        media = somaP/total
    }
}
);