//criar refereçia para elementos do html
const inConta = document.getElementById ("inConta")
const btCalcular = document.getElementById("btCalcular")
const outTotalconta = document.getElementById ("outTotalconta")
//Evento do botão e acionar function
btCalcular.addEventListener("click", btCalcular)
function btCalcular(){

    var valorConta = Number(inConta.value)
    var txCarcom = inConta * 0.1
    var valorTotal = valorConta + txCarcom

    outTotalconta.innerHTML="Taxa do Garçom R$" + txCarcom + "<br>Valor Total da Conta R$" + valorTotal
    


}

