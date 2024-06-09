let alunos = document.querySelector("#alunos");
let salas = document.querySelector("#salas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function divisao(){
    let Alunos = Number(alunos.value);
    let Salas = Number (salas.value);

    let alunosporturma = parseInt(Alunos / Salas);
    let alunossemturma = Alunos % Salas;

    let mensagem = "Com " + Alunos + " alunos divididos em " + Salas + " turmas:";
    mensagem += "<br>";
    mensagem += "Cada turma terá " + alunosporturma + " alunos.";
    mensagem += "<br>";
    mensagem += "Ficarão " + alunossemturma + " alunos sem turma.";

    resultado.innerHTML = mensagem;

}

btCalcular.onclick = function(){
    divisao();
}