function soma(n) {
    let totp = 0
    let toti = 0
    for (let i = 0; i <= valores.length; i++){
        if(valores[i] % 2 ==  0) {
             totp = totp + 1
             
        } else {
             toti = toti + 1
            
        }
        
    }
    console.log(`O total de números pares é ${totp}`);
    console.log(`O total de números impares é ${toti}`);
} 
let valores = [1,9,5,2,4,7,6,3,8,6]
soma()