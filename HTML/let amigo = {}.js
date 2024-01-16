let amigo = {nome: 'Allen', 
sexo: 'F', 
peso:48,
engordar(p=0)/* não esqueça, p foi criado dentro da função, não é um valor real, mas se na chamada da função não tiver nenhum valor irá receber o "p" */ {
    console.log('Engordou');
    this.peso  += p
}}
amigo.engordar() /*chamada*/
console.log( `${amigo.nome} pesa ${amigo.peso}Kg`);
