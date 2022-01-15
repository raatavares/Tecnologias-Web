//Resolução bug menu
function checkMediaQuery(){
  if(window.innerWidth > 1050){
    document.getElementById("parte2").style.display="block";
    document.body.style.overflow = "auto";
  }
  if(window.innerWidth < 1050){
    document.getElementById("parte2").style.display="none";
  }
}

window.addEventListener('resize', checkMediaQuery);

//botão menu
function Open(){
  if(document.getElementById("parte2").style.display == "block"){
    document.getElementById("parte2").style.display="none";
    document.body.style.overflow = "auto";
  }else{
    document.getElementById("parte2").style.display="block";
    document.body.style.overflow = "hidden";
  }
  document.getElementById("burger").classList.toggle("toggle");
}



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

//Botoes slide img
function Left()
{
  first_val = document.getElementById( "img_first" ).value;
  last_val = document.getElementById( "img_last" ).value;
  
  if(first_val > 1){
    nome="image"+last_val;
    document.getElementById(nome).style.display="none";
    first_val--;
    nome="image"+first_val;
    document.getElementById(nome).style.display="block";
    last_val--;
  }
  document.getElementById( "img_first" ).value = first_val;
  document.getElementById( "img_last" ).value = last_val;
}

function Right()
{
  first_val = document.getElementById( "img_first" ).value;
  last_val = document.getElementById( "img_last" ).value;
  
  if(last_val < 5){
    nome="image"+first_val;
    document.getElementById(nome).style.display="none";
    first_val++;
    last_val++;
    nome="image"+last_val;
    document.getElementById(nome).style.display="block";
  }
  document.getElementById( "img_first" ).value = first_val;
  document.getElementById( "img_last" ).value = last_val;
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
  
  Spread1 = ((Math.random() * 4) + 1).toFixed(2);
  document.getElementById("spread1").innerHTML = Spread1+"%";
  
  Spread2 = ((Math.random() * 4) + 1).toFixed(2);
  document.getElementById("spread2").innerHTML = Spread2+"%";
  
  Spread3 = ((Math.random() * 4) + 1).toFixed(2);
  document.getElementById("spread3").innerHTML = Spread3+"%";
  
  TaxaGlobal1 = (0.5 + Number(Spread1)).toFixed(2);
  TaxaGlobal2 = (0.5 + Number(Spread2)).toFixed(2);
  TaxaGlobal3 = (0.5 + Number(Spread3)).toFixed(2);
  meses = Number(anos)*12;
  ValorMensal1 = (Number(emprestimo) + Number(emprestimo) * TaxaGlobal1)/meses;
  ValorMensal2 = (Number(emprestimo) + Number(emprestimo) * TaxaGlobal2)/meses;
  ValorMensal3 = (Number(emprestimo) + Number(emprestimo) * TaxaGlobal3)/meses;
  montanteTotal = Number(entrada) + Number(emprestimo);

  document.getElementById("prestacoes1").innerHTML = ValorMensal1.toFixed(2)+"€";
  document.getElementById("prestacoes2").innerHTML = ValorMensal2.toFixed(2)+"€";
  document.getElementById("prestacoes3").innerHTML = ValorMensal3.toFixed(2)+"€";
  document.getElementById("juro-global1").innerHTML = TaxaGlobal1+"%";
  document.getElementById("juro-global2").innerHTML = TaxaGlobal2+"%";
  document.getElementById("juro-global3").innerHTML = TaxaGlobal3+"%";
  document.getElementById("Montante-total").innerHTML = montanteTotal+"€";
  document.getElementById("Montante-total1").innerHTML = montanteTotal+"€";
  document.getElementById("Montante-total2").innerHTML = montanteTotal+"€";
  document.getElementById("emprestimo").innerHTML = emprestimo+"€";
  document.getElementById("emprestimo1").innerHTML = emprestimo+"€";
  document.getElementById("emprestimo2").innerHTML = emprestimo+"€";
  document.getElementById("entrada-inicial").innerHTML = entrada+"€";
  document.getElementById("entrada-inicial1").innerHTML = entrada+"€";
  document.getElementById("entrada-inicial2").innerHTML = entrada+"€";


  if(document.getElementById("ResultadoFin").style.display != "contents")
    document.getElementById("ResultadoFin").style.display = "contents";
  else
    document.getElementById("ResultadoFin").style.display = "none";
}

//financiamento -> ver detalhes

function FunctionDetalhes() {
  if(document.getElementById("box-direita").style.display == "none")
    document.getElementById("box-direita").style.display = "block";
  else
    document.getElementById("box-direita").style.display = "none";
}

function FunctionDetalhes2() {
  if(document.getElementById("box-direita2").style.display == "none")
    document.getElementById("box-direita2").style.display = "block";
  else
    document.getElementById("box-direita2").style.display = "none";
}

function FunctionDetalhes3() {
  if(document.getElementById("box-direita3").style.display == "none")
    document.getElementById("box-direita3").style.display = "block";
  else
    document.getElementById("box-direita3").style.display = "none";
}