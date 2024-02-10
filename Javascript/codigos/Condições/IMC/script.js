function resultado() {
  var peso = document.getElementById('peso')
  var altura = document.getElementById('altura')
  var imc = peso.value / (altura.value ** 2)
  var res = document.querySelector('div#res')
  
  console.log(imc);
  if (imc < 18.5) {
    res.innerHTML = `Abaixo do peso ${imc}`
  } else if (imc >= 18.5 && imc < 25) {
    res.innerHTML = `Peso normal ${imc}`
  } else if (imc >= 25 && imc < 30) {
    res.innerHTML = `Sobrepeso ${imc}`
  } else if (imc >= 30 && imc < 35) {
    res.innerHTML = `Obesidade grau I ${imc}`
  } else if (imc >= 35 && imc < 40) {
    res.innerHTML = `Obesidade grau II ${imc}`
  }else {
    res.innerHTML = 'Obesidade morbida'
  }
}





// var peso = 52
// var altura = 1.60