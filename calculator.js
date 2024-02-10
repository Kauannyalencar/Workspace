const botoes = document.querySelectorAll('button.number')
const display = document.querySelector('.current-number')


botoes.forEach((botao) => {
    botao.addEventListener("click", () =>{
        display.textContent = botao.id
        
    } )
})

                    // 2   * 2   = 4 + 6 = 10

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function (array) {
	let total = 0;
   for(let i = 0; i < array.length; i++){
    total += array[i];
    console.log(total);
   }
   return total;
};
// const array = [1,7, 8,8];
// console.log(sum(array));

// const multiply = function() {
//     return n1 * n2;
// };

// const power = function(n1, n2) {
// 	return Math.pow(n1, n2)
// };
// console.log(power(7, 2));
// const factorial = function(n) {
//     for(let i = n - 1; i >= 1; i--) {
//         n = n * i;
//         console.log(i);
//         console.log(n);
//     }
//     return n;
// };

