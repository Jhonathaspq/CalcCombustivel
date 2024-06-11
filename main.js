function gas() {
  var n1 = document.getElementById("txtn1").value;
  var n2 = document.getElementById("txtn2").value;
  var resultado = n1 / n2;

  if (n1 == 0 && n2 == 0) {
    alert("[ERRO] preencha os dados corretamente");
  } else if (resultado < 0.7) {
    alert("É melhor abastecer com Álcool");
  } else alert("É melhor abastecer com Gasolina");
}
