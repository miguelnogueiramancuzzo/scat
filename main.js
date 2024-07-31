function compre () {

 const width = 800;
 const height = 600;
 const left = (screen.width/2) - (width/2);
 const top= (screen.height/2) - (height/2);
 window.open('pagamento.html', 'Pagamento',`width=$(width), height=$(height), top=$(top), 
 left=$(left)`);

}

function submeterpagamento() {

//Pagando os valores dos campos
const nome = document.getElementById("nome"), value;
const numero = document.getElementById("numero"), value;
const validade = document.getElementById("validade"), value;
const cvv = document.getElementById("cvv"), value;
alert("brigadão $(nome). Seu pagamento com o cartão $(numero) foi processado veyr!")
window.close(); //Redireciona para a página inicial

}
