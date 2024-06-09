let valorVendido = document.querySelector("#valorVendido");
let meta = document.querySelector("#meta");
let metaMinima = document.querySelector("#metaMinima");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

function verificarmetas(){
    let valor = Number(valorVendido.value);
    let Metaon = Number(meta.value);
    let Minima = Number(metaMinima.value);

    // Calcular percentual de atingimento da meta
    let percentualMeta = (valor / Metaon) * 100;

    // Calcular percentual de atingimento da meta mínima
    let percentualMetaMinima = (valor / Minima) * 100;

    // Exibir os resultados no elemento HTML
    let mensagem = "";
    if (valor >= Metaon) {
        mensagem = "Você atingiu a meta!";
    } else if (valor >= Minima) {
        mensagem = "Você atingiu a meta mínima, mas não a meta completa.";
    } else {
        mensagem = "Você não atingiu a meta e nem a meta mínima.";
    }

    mensagem += "<br>Percentual atingindo da meta: " + percentualMeta.toFixed(2) + "%<br>";
    mensagem += "Percentual atingido da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";

    resultado.innerHTML = mensagem;
}

btVerificar.onclick = function(){
    verificarmetas();
}
