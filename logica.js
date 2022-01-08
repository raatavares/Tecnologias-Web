
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
  if (idade[0].checked) 
      c1 = 1;
  else if (idade[1].checked) 
      c1 = 0.95;
  else if (idade[2].checked) 
      c1 = 0.9;
  if(document.getElementById("garagem").checked == true)
    c2 = 1;
  else
    c2 = 0.95;
  if(document.getElementById("transportes").checked == true)
    c3 = 1;
  else
    c3 = 0.9;
  zona1 = area*1200*c1*c2*c3;
  zona2 = area*2000*c1*c2*c3;
  zona3 = area*2500*c1*c2*c3;
  document.getElementById("zona1").innerHTML = zona1+" €";
  document.getElementById("zona2").innerHTML = zona2+" €";
  document.getElementById("zona3").innerHTML = zona3+" €";

 if(document.getElementById("resultado").style.display != "contents")
    document.getElementById("resultado").style.display = "contents";
}

function FunctionLimpar(){
  if(document.getElementById("resultado").style.display == "contents")
    document.getElementById("resultado").style.display = "none";
}

