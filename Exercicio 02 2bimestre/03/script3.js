let N1 = document.querySelector("#N1");
let N2 = document.querySelector("#N2");
let btSomar = document.querySelector("#btSomar");
let soma = document.querySelector("#soma");
let subtracao = document.querySelector("#subtracao");
let multiplicacao = document.querySelector("#multiplicacao");
let divisao = document.querySelector("#divisao");

function calcular(){
    let numero1 = Number (N1.value);
    let numero2 = Number (N2.value);

    //fazer a soma
    let Soma = numero1 + numero2;
    //fazer a subtração
    let Subtracao = numero1 - numero2;
    //fazer a multiplicação
    let Multiplicacao = numero1 * numero2;
    //fazer a divisão
    let Divisao = numero1 / numero2;

    //exibir o resultado na tela
    soma.textContent = "Soma:" + Soma;
    subtracao.textContent = "Subtração:" + Subtracao;
    multiplicacao.textContent = "Multiplicação:" + Multiplicacao;
    divisao.textContent = "Divisão" + Divisao;
}

btSomar.onclick = function(){
    calcular();
}