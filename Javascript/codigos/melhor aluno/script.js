let nomeAluno = document.querySelector(".aluno");
let notaAluno = document.querySelector("#nota");
const quantidadeAluno = document.querySelector("#qt-aluno");
const addAluno = document.querySelector(".add-aluno")
const res = document.querySelector(".res")

nomeAluno.disabled = true;
notaAluno.disabled = true;
const btn = document.querySelector(".btn")
let contador = 0;
let melhorAluno = '';
let melhorNota = 0;
console.log(Number(quantidadeAluno.value));

btn.addEventListener("click", () => {
    let des = Number(quantidadeAluno.value)
    console.log(Number(des));
    nomeAluno.disabled = false;
    notaAluno.disabled = false;
    if (Number(quantidadeAluno.value) == 0 || Number(quantidadeAluno.value) == NaN) {
        alert("Adicione o número de alunos da sala!")
    } else{
        return des;
    }
})

function addAlunos(des) {
    let nota = Number(notaAluno.value)
    let aluno = nomeAluno.value;
    while (contador < Number(quantidadeAluno.value)) {
        if (nota > melhorNota) {
            melhorNota = nota;
            melhorAluno = aluno[contador];
        } 
        contador++
        nomeAluno.value = "";
        notaAluno.value = "";
    }
    res.textContent += `A turma tem ${Number(quantidadeAluno.value)} alunos`;
   res.textContent += `O melhor aluno foi ${melhorAluno}`
}



// function sala(quantidadeAluno) {

//     while (contador < quantidadeAluno) {
//         nomeAluno = `Nome do aluno ${contador + 1}: `
//         notaAluno = `Nota do aluno ${contador + 1}: `
//         if (notaAluno > melhorNota) {
//             melhorNota = notaAluno;
//             melhorAluno = nomeAluno
//         }
//         let alunos = document.createElement('p');
//         let alunoNotaA = document.createElement('p');

//         alunos.textContent = `A turma tem${quantidadeAluno.value} alunos`;
//         alunoNotaA.textContent = `O melhor aluno foi ${melhorAluno} com nota ${melhorNota}`
//         res.appendChild(alunos)
//         res.appendChild(alunoNotaA)
//         contador++
//         console.log(melhorAluno);
//         console.log(melhorNota);
//     }}

