const produtos = [
    {
        nome: "notenook",
        preco: 2000
    },
    {
        nome:"Smartphone",
        preco: 400
    }
]

const precoEmReais = produtos.map(p => p.preco * 4.79)
console.log(precoEmReais);