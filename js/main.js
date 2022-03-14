
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.twitch.tv/coreano");
}

function trocar(elemento){
    // document.getElementById("mouse").innerHTML = "Obrigado"
    elemento.innerHTML = "Obrigado";
}

function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "passe o mouse aqui"
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}




/*
function soma(n1 ,n2){
    return n1 + n2;
}

function validaidade(idade){
    var validar = true
    if (idade>=18){
        validar = true
    } else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));
*/



/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count<=5){
    console.log(count);
    alert(count);
    count++;
}
*/




/*
var idade = prompt("Qual a sua idade?");
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];
console.log(fruta);
alert(fruta[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


// var lista = ["maça", "pêra", "laranja"];
//  lista.push("uva");
// lista.pop();

// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "));

/*
var nome = "Luciano Bruno";
var n1 = 9;
var n2 = 10;
var frase = "japao melhor time do mundo";
alert(nome + " tem " + idade + " anos" );
alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toLocaleUpperCase()); */