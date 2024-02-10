let n = document.getElementById('n1')
let res = document.querySelector('div#res')
function parimp(){
    // for(let c = 0; c < n.length; c++) {
    //     const numero = n [c]
    let numero = n.value
        if (numero % 2 === 0) {
            res.innerHTML = `${numero} é par`
        } else {
            res.innerHTML = `${numero} é impar`
        
        }
        
}