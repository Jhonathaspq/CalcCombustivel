function gas() {
  var n1 = document.getElementById("txtn1");
  var n2 = document.getElementById("txtn2");
  var valorAlcool = parseFloat(n1.value);
  var valorGasolina = parseFloat(n2.value);
  var resultado = valorAlcool / valorGasolina;

  if (resultado === 0) {
    alert("[ERRO] preencha os dados corretamente");
  } else if (resultado < 0.7) {
    alert("É melhor abastecer com Álcool");
  } else alert("É melhor abastecer com Gasolina");
}
