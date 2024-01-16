function doar() {
    let doacao = document.getElementById('numero')
    let res = document.getElementById('res')
    let d = Number(doacao.value)

    switch (d) {
        case 1:
            d = 10
           res.innerHTML = `Sua doação foi de R$${d}. Muito obrigada!` 
            break;
        case 2:
            d = 25
            res.innerHTML = `Sua doação foi de R$${d}. Muito obrigada!`
            break
        case 3:
            d = 50
            res.innerHTML = `Sua doação foi de R$${d}. Muito obrigada!`
            break
        case 4:
            d = window.prompt('Qual o valor da doação ?')
            res.innerHTML = `Sua doação foi de R$${d}. Muito obrigada!`
            break
        case 5:
            d = 0
            res.innerHTML = "Cancelado"
    }
} 