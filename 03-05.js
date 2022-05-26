/*var qtdepares = 0; 

for (var i=1; i <=27; i++){
    if ( i % 2 == 0) {
        qtdepares++
    }
} alert("qntd pares: " + qtdepares + " e I: " + i); */

/* 0) faça um algoritimo que exiba a tabuada do numero escolhido*/
var multiplicador = parseFloat(prompt("insira o multiplicador"));

for(var i= 0; i <=10; i++){
        console.log(multiplicador + " x " + i + " = " + (multiplicador * i));
}

/*versao  em WHILE */
var multiplicador = parseFloat(prompt("insira o multiplicador"));
var i =0
while(i <=10)
{
    console.log(multiplicador + " x " + i + " = " + (multiplicador * i));
    i++
}

/*1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos).*/

for(var i = 1 ; i <= 30; i++){
    if(i % 2 != 0){
        console.log("Impar: " + i);
    }
}
/* versao com WHILE */
var i = 1;

while(i <= 30){
    if(i % 2 != 0){
        console.log("Impar: " + i);
    }
    i++
}

/*2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).*/
 
var multiplos= 0;
for (var i=1; i<=70; i++){
    if(i % 7 == 0){
        multiplos++
    }
} console.log("Existem: " + multiplos + " multiplos de 7.");

/* versao com WHILE */
var multiplos= 0;
var i = 1;

while(i <=70 )
{
    if(i % 7 == 0){
        multiplos++
    }
    i++
} console.log("Existem: " + multiplos + " multiplos de 7.");


/*3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.*/

var comeco = parseInt(prompt("digite o começo do intervalo"));
var Fim = parseInt(prompt("digite o fim do intervalo"));
var qtdepares = 0;
var qntdeimpares = 0;

for(var i = comeco; i <= fim; i++){
    if(comeco % 2 == 0){
        ++qtdepares
    } else{
        ++qntdeimpares
    }
} 
console.log("Quantidade de Pares: " + qtdepares + ".");
console.log("Quantidade de Impares: " + qntdeimpares + ".")

/* versão com WHILE */

var comeco = parseInt(prompt("digite o começo do intervalo"));
var fim = parseInt(prompt("digite o fim do intervalo"));
var qtdepares = 0;
var qntdeimpares = 0;

while(comeco <= fim){
    if(comeco % 2 == 0){
        ++qtdepares
    } else{
        ++qntdeimpares
    }
    comeco++
} 
console.log("Quantidade de Pares: " + qtdepares + ".");
console.log("Quantidade de Impares: " + qntdeimpares + ".")

/* 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário; */

var comeco = parseInt(prompt("digite o começo do intervalo"));
var fim = parseInt(prompt("digite o fim do intervalo"));
var somaMultiploOnze = 0;

for(var i = comeco; i <= fim; i++)
{
    if(i % 11 == 0)
    {
        somaMultiploOnze = somaMultiploOnze + i;
    }
} console.log("Soma dos múltiplos de 11: " + somaMultiploOnze);

/* versão com WHILE */

var comeco = parseInt(prompt("digite o começo do intervalo"));
var fim = parseInt(prompt("digite o fim do intervalo"));
var somaMultiploOnze = 0;

while(comeco <= fim)
{
    if(comeco % 11 == 0)
    {
        somaMultiploOnze = somaMultiploOnze + comeco;
    } comeco++
} console.log("Soma dos múltiplos de 11: " + somaMultiploOnze);

/* 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10. */

var comeco = parseInt(prompt("digite o começo do intervalo"));
var fim = parseInt(prompt("digite o fim do intervalo"));
var soma = 0;
for(var i = comeco; i <= fim; i++)
{
    soma += i       /* isso é igual a "soma = soma + i" */
}
console.log("Soma total: " + soma)

/* versao com WHILE */
var comeco = parseInt(prompt("digite o começo do intervalo"));
var fim = parseInt(prompt("digite o fim do intervalo"));
var soma = 0;
var i =comeco;

while(i <= fim)
{
    soma += i       /* isso é igual a "soma = soma + i" */
    i++
}

console.log("Soma total: " + soma)
