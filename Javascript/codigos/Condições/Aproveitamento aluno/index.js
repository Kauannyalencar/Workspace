function resultado() {
    let n1 = document.getElementById('nota1')
    let n2 = document.getElementById('nota2')
    let res = document.getElementById('res')

    let not1 = Number(n1.value)
    let not2 = Number(n2.value)
    let media = (not1 + not2) / 2

       res.innerHTML = '';
    console.log(media);

    if (media <= 10 && media >= 9) {
        console.log('APROVEITAMENTO A');
        res.innerHTML += ` APROVEITAMENTO A`
    } else if (media < 9 && media >= 8) {
        res.innerHTML += ` APROVEITAMENTO B`
    } else if (media < 8 && media >= 7) {
        res.innerHTML += `APROVEITAMENTO C`
    } else if (media < 7 && media >= 6) {
        res.innerHTML += `APROVEITAMENTO D`
    } else if (media < 6 && media >= 5) {
        res.innerHTML += `APROVEITAMENTO E`
    } else {
        res.innerHTML += `APROVEITAMENTO F`
    }

}