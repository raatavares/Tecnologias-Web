
//Cor botoes comprar-arrendar
function myFunctionArrendar() {
  document.getElementById("arrendar").style.backgroundColor="white";
  document.getElementById("compras").style.backgroundColor="#eceff2";
}

function myFunctionCompras() {
  document.getElementById("compras").style.backgroundColor="white";
  document.getElementById("arrendar").style.backgroundColor="#eceff2";
}

//Botao ver mais
var mybutton = document.getElementById("TopBtn");
function topFunction() {
  document.body.scrollTop = 990;
  document.documentElement.scrollTop = 990;
}

//Botoes pesquisas mais comuns
function myFunction1() {
  document.getElementById("myDropdown3-1").classList.toggle("show");
}
  
function myFunction2() {
  document.getElementById("myDropdown3-2").classList.toggle("show");
}
  
function myFunction3() {
  document.getElementById("myDropdown3-3").classList.toggle("show");
}
  
function myFunction4() {
  document.getElementById("myDropdown3-4").classList.toggle("show");
}

//Botões de Cálculo de Preço de Imóvel
function FunctionCalculo() {
  document.getElementById("CalcDropdown").classList.toggle("show");
  if(document.getElementById("resultado").style.display == "contents")
    document.getElementById("resultado").style.display = "none";
}

function FunctionSubmeter() {
  area = document.getElementById("area").value;
  idade = document.getElementsByName("idade");
  if (idade[0].checked){
      c1 = 1;
      document.getElementById("Zona1-idade").innerHTML = "Inferior a 6 anos";
      document.getElementById("Zona2-idade").innerHTML = "Inferior a 6 anos";
      document.getElementById("Zona3-idade").innerHTML = "Inferior a 6 anos";
  }else if (idade[1].checked) { 
      c1 = 0.95;
      document.getElementById("Zona1-idade").innerHTML = "Entre 7 a 10 anos";
      document.getElementById("Zona2-idade").innerHTML = "Entre 7 a 10 anos";
      document.getElementById("Zona3-idade").innerHTML = "Entre 7 a 10 anos";
    }
  else if (idade[2].checked) {
      c1 = 0.9;
      document.getElementById("Zona1-idade").innerHTML = "Superior a 11 anos";
      document.getElementById("Zona2-idade").innerHTML = "Superior a 11 anos";
      document.getElementById("Zona3-idade").innerHTML = "Superior a 11 anos";
    }

  if(document.getElementById("garagem").checked == true){
    c2 = 1;
    document.getElementById("Zona1-garagem").innerHTML = "Com";
    document.getElementById("Zona2-garagem").innerHTML = "Com";
    document.getElementById("Zona3-garagem").innerHTML = "Com";
  }
  else{
    c2 = 0.95;
    document.getElementById("Zona1-garagem").innerHTML = "Sem";
    document.getElementById("Zona2-garagem").innerHTML = "Sem";
    document.getElementById("Zona3-garagem").innerHTML = "Sem";
  }
  if(document.getElementById("transportes").checked == true){
    c3 = 1;
    document.getElementById("Zona1-transportes").innerHTML = "Com";
    document.getElementById("Zona2-transportes").innerHTML = "Com";
    document.getElementById("Zona3-transportes").innerHTML = "Com";
  }
  else{
    c3 = 0.9;
    document.getElementById("Zona1-transportes").innerHTML = "Sem";
    document.getElementById("Zona2-transportes").innerHTML = "Sem";
    document.getElementById("Zona3-transportes").innerHTML = "Sem";
  }
  zona1 = area*1200*c1*c2*c3;
  zona2 = area*2000*c1*c2*c3;
  zona3 = area*2500*c1*c2*c3;
  document.getElementById("zona1").innerHTML = zona1+" €";
  document.getElementById("zona2").innerHTML = zona2+" €";
  document.getElementById("zona3").innerHTML = zona3+" €";

  document.getElementById("Zona1-area").innerHTML = area;
  document.getElementById("Zona2-area").innerHTML = area;
  document.getElementById("Zona3-area").innerHTML = area;

 if(document.getElementById("resultado").style.display != "contents")
    document.getElementById("resultado").style.display = "contents";
}



function FunctionLimpar(){
  if(document.getElementById("resultado").style.display == "contents")
    document.getElementById("resultado").style.display = "none";
}

//Botões do Financiamento
function FunctionFinanciamento() {
  document.getElementById("FinDropdown").classList.toggle("show");
}

function FunctionCalcFinanciamento() {
  entrada = document.getElementById("recebe-entrada").value;
  emprestimo = document.getElementById("recebe-emprestimo").value;
  anos = document.getElementById("recebe-anos").value;

  function generateRandomFloatInRange(min, max) {
    return (Math.random() * 4) + 1;
  }
  Spread1 = generateRandomFloatInRange(1.000, 4.999).toFixed(3);
  document.getElementById("spread1").innerHTML = Spread1;
  function generateRandomFloatInRange(min, max) {
    return (Math.random() * 4) + 1;
  }
  Spread2 = generateRandomFloatInRange(1.000, 4.999).toFixed(3);
  document.getElementById("spread2").innerHTML = Spread2;
  function generateRandomFloatInRange(min, max) {
    return (Math.random() * 4) + 1;
  }
  Spread3 = generateRandomFloatInRange(1.000, 4.999).toFixed(3);
  document.getElementById("spread3").innerHTML = Spread3;

  //meses = anos*12;
  //ValorMensal1 = (emprestimo + TaxaGlobal1)/meses;
  //ValorMensal2 = (emprestimo + TaxaGlobal2)/meses;
  //ValorMensal3 = (emprestimo + TaxaGlobal3)/meses;
  TaxaGlobal1 = 0.5 + Spread1;
  TaxaGlobal2 = 0.5 + Spread2;
  TaxaGlobal3 = 0.5 + Spread3;
  montanteTotal = entrada + emprestimo;

  //document.getElementById("prestacoes1").innerHTML = ValorMensal1;
  //document.getElementById("prestacoes2").innerHTML = ValorMensal2;
  //document.getElementById("prestacoes3").innerHTML = ValorMensal3;
  document.getElementById("juro-global1").innerHTML = TaxaGlobal1;
  document.getElementById("juro-global2").innerHTML = TaxaGlobal2;
  document.getElementById("juro-global3").innerHTML = TaxaGlobal3;
  document.getElementById("Montante-total").innerHTML = montanteTotal;
  document.getElementById("Montante-total1").innerHTML = montanteTotal;
  document.getElementById("Montante-total2").innerHTML = montanteTotal;
  document.getElementById("emprestimo").innerHTML = emprestimo;
  document.getElementById("emprestimo1").innerHTML = emprestimo;
  document.getElementById("emprestimo2").innerHTML = emprestimo;
  document.getElementById("entrada-inicial").innerHTML = entrada;
  document.getElementById("entrada-inicial1").innerHTML = entrada;
  document.getElementById("entrada-inicial2").innerHTML = entrada;

  if(document.getElementById("ResultadoFin").style.display != "contents")
  document.getElementById("ResultadoFin").style.display = "contents";
}