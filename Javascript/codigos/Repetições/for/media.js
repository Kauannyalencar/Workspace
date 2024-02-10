
function total() {
    let c = 0
    let totp = 0
    let totn = 0
    let N = 0
    let media = 0
    let num = [4, 9, 1, -3, 6 ,-2 ,7 ,9 ,4 , 6]
      for (let pos = 1; pos < num.length; pos++){
        N = N + num[pos]
        if (num[pos] >= 1) {
          totp = totp + 1
        }  else if (num[pos] <= 0){
          totn = totn + 1
      }
    }  
  
    media = N/num.length
    console.log(`O total de numeros positivos é ${totp}`);
    console.log(`O total de números negativos é ${totn}`);
    console.log(`A media dos numeros é ${media}`);
}
total()
