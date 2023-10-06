//--- TODO
function limpar() {
  //--- TODO: escrever o código em falta aqui...
  document.getElementById("quantidades").innerHTML = "0";
  document.getElementById("total").innerHTML = "0.00";
  for (var i = 1; i < 7; i++) {
    document.getElementById("produto" + i).value = "0";
  }
}

function validar() {
  //--- TODO: escrever o código em falta aqui...
  //--- Se a função retornar true o formulário será enviado;
  //--- Se a função retornar false, o formulário não será enviaddo.
  var counter = 0;
  for (var i = 1; i < 7; i++) {
    if (parseInt(document.getElementById("produto" + i).value) > 0) {
      counter++;
    }
  }
  if (counter < 2) {
    alert("Tem de comprar pelo menos 2 tipos diferentes de produtos!");
    return false;
  }
  return true;
}

function calcular() {
  var totalprodutos = 0;
  var totalpreco = 0;

  for (var i = 1; i < 7; i++) {
    totalprodutos += parseFloat(document.getElementById("produto" + i).value);
    totalpreco +=
      parseInt(document.getElementById("produto" + i).value) *
      parseFloat(document.getElementById("precoproduto" + i).value);
    console.log(totalpreco);
    console.log(totalprodutos);
    console.log(i);
  }
  if (totalprodutos >= 5) {
    totalpreco = 0.95 * totalpreco;
  }
  if (totalpreco > 100) {
    totalpreco = 0.95 * totalpreco;
  }
  document.getElementById("total").innerHTML = totalpreco.toFixed(2);
  document.getElementById("quantidades").innerHTML = totalprodutos;
}

function comprar(number) {
  document.getElementById("produto" + number).value++;
  calcular();
}
