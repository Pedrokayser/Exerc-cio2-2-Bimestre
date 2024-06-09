let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refri = document.querySelector("#refri");
let btSomar = document.querySelector("#btSomar");
let sabores = document.querySelector("#sabores");
let total = document.querySelector("#total");

function resultado() {
    let Sabor1 = sabor1.value;
    let Sabor2 = sabor2.value;
    let Sabor3 = sabor3.value;
    let Sabor4 = sabor4.value;
    let Refri = Number(refri.value);

    let valorsabor = 12.00; //valor sabor pizza
    let valorRefrigerante = 7.00; //valor refri

    //calcular o total da pizza
    let pizzaTotal = (Number(Sabor1 != "" ? 1 : 0) + Number(Sabor2 != "" ? 1 : 0) + Number(Sabor3 != "" ? 1 : 0) + Number(Sabor4 != "" ? 1 : 0)) * valorsabor;

    //calcular refri
    let refriTotal = Refri * valorRefrigerante;

    //calcular valor total
    let totalGeral = pizzaTotal + refriTotal;

    //exibir o resultado na tela
    sabores.innerHTML = "Sabores de Pizza Escolhidos:<br>";
    if (Sabor1 != "") sabores.innerHTML += "- " + Sabor1 + "<br>";
    if (Sabor2 != "") sabores.innerHTML += "- " + Sabor2 + "<br>";
    if (Sabor3 != "") sabores.innerHTML += "- " + Sabor3 + "<br>";
    if (Sabor4 != "") sabores.innerHTML += "- " + Sabor4 + "<br>";

    total.textContent = "Total dos Refrigerantes: R$" + refriTotal.toFixed(2) + " | Total a pagar: R$" + totalGeral.toFixed(2);
}

btSomar.onclick = function () {
    resultado();
}