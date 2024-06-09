let numero = document.querySelector("#numero");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function verificar(){
    let Numero = Number(numero.value);

    if (Numero % 2 === 0){ 
        resultado.textContent = "O número " + Numero + " é par";
    } else {
        resultado.textContent = "O número " + Numero + " é ímpar";
    }
}

btVerificar.onclick = function(){
    verificar();
}