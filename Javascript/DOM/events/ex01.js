const btn = document.querySelector("#btn");
// //Arrow func
// btn.onclick = () => alert("Hello world");


function botao() {
    alert("Hello world")
}
//Regular func



btn.addEventListener("click", botao);
//Ou
//EventListener func

btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
    console.log(e.target);
})