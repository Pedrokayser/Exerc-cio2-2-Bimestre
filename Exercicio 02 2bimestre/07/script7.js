let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btComparar = document.querySelector("#btComparar");
let resultado = document.querySelector("#resultado");

function comparar() {
    let Numero1 = Number(numero1.value);
    let Numero2 = Number(numero2.value);

    if (Numero1 > Numero2) {
        resultado.textContent = "O primeiro número é maior que o segundo.";
    } else if (Numero1 < Numero2) {
        resultado.textContent = "O primeiro número é menor que o segundo";
    } else{
        resultado.textContent = "Os números são iguais";
    }
}

btComparar.onclick = function(){
    comparar();
}