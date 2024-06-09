let Valor1 = document.querySelector("#Valor1");
let btSomar = document.querySelector("#btSomar");
let aumento1 = document.querySelector("#aumento1");
let aumento2 = document.querySelector("#aumento2");
let aumento5 = document.querySelector("#aumento5");
let aumento10 = document.querySelector("#aumento10");

function verificarvalor(){
    let cotacao = Number(Valor1.value);

    //fazer a multiplicação
    let resultado = cotacao * 1.01 //aumento de 1%
    let resultado2 = cotacao * 1.02 //aumento de 2%
    let resultado3 = cotacao * 1.05//aumento de 5%
    let resultado4 = cotacao * 1.10//aumento de 10%

    //exibir resultado na tela 
    aumento1.textContent = "Aumento de 1% $:" + resultado.toFixed(3);
    aumento2.textContent = "Aumento de 2% $:" + resultado2.toFixed(3);
    aumento5.textContent = "Aumento de 5% $:" + resultado3.toFixed(3);
    aumento10.textContent = "Aumento de 10% $:" + resultado4.toFixed(3);
}

btSomar.onclick = function(){
    verificarvalor();
}