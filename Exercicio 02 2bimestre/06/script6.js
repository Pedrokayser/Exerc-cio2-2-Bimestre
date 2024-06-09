let nota = document.querySelector("#nota");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function verificar(){
    let Notavalor = Number(nota.value);

    if (Notavalor >=6){
        resultado.textContent = "Aprovado";
    } else if (Notavalor >4 && Notavalor < 6 ){
        resultado.textContent = "Precisa fazer prova substitutiva";
    } else {
        resultado.textContent = "Reprovado";
    }
}

btVerificar.onclick = function(){
    verificar();
}