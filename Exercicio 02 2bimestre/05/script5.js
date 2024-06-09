let nome1 = document.querySelector("#nome1");
let ano1 = document.querySelector("#ano1");
let nome2 = document.querySelector("#nome2");
let ano2 = document.querySelector("#ano2");
let nome3 = document.querySelector("#nome3");
let ano3 = document.querySelector("#ano3");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function verificar() {
    let Nome1 = nome1.value;
    let Ano1 = Number(ano1.value);
    let Nome2 = nome2.value;
    let Ano2 = Number(ano2.value);
    let Nome3 = nome3.value;
    let Ano3 = Number(ano3.value);

    let idade1 = new Date().getFullYear() - Ano1;
    let idade2 = new Date().getFullYear() - Ano2;
    let idade3 = new Date().getFullYear() - Ano3;

    let maisVelha, segundaMaisVelha, maisNova;

    if (idade1 >= idade2 && idade1 >= idade3) {
        maisVelha = Nome1 + idade1 + " anos";
        if (idade2 >= idade3) {
            segundaMaisVelha = Nome2 +  + idade2 + " anos";
            maisNova = Nome3 + idade3 + " anos";
        } else {
            segundaMaisVelha = Nome3 + idade3 + " anos";
            maisNova = Nome2 +  + idade2 + " anos";
        }
    } else if (idade2 >= idade1 && idade2 >= idade3) {
        maisVelha = Nome2 + idade2 + " anos";
        if (idade1 >= idade3) {
            segundaMaisVelha = Nome1 +  + idade1 + " anos";
            maisNova = Nome3 + idade3 + " anos";
        } else {
            segundaMaisVelha = Nome3 +  + idade3 + " anos";
            maisNova = Nome1 +  idade1 + " anos";
        }
    } else {
        maisVelha = Nome3 +  + idade3 + " anos";
        if (idade1 >= idade2) {
            segundaMaisVelha = Nome1 +  idade1 + " anos";
            maisNova = Nome2 +  idade2 + " anos";
        } else {
            segundaMaisVelha = Nome2 +  + idade2 + " anos";
            maisNova = Nome1 + idade1 + " anos";
        }
    }

    resultado.innerHTML = "Pessoa mais velha: " + maisVelha + "<br>Segunda pessoa mais velha: " + segundaMaisVelha + "<br>Pessoa mais nova: " + maisNova;
}

btVerificar.onclick = function(){
    verificar();
}
