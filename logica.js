
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

