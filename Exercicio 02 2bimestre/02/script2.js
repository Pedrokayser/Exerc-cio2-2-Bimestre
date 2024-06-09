let Numpessoa = document.querySelector("#Numpessoa");
let btSomar = document.querySelector("#btSomar");
let Resultado1 = document.querySelector("#Resultado1");
let Resultado2 = document.querySelector("#Resultado2");

function calcularIngredientes(){
    let numPessoas = Number(Numpessoa.value);
    let ovosNecessarios = numPessoas * 2;
    let queijoNecessario = numPessoas * 50;

    Resultado1.textContent = "Quantidade de ovos: " + ovosNecessarios;
    Resultado2.textContent = "Quantidade de queijo: " + queijoNecessario + " gramas";
}

btSomar.onclick = function(){
    calcularIngredientes();
}