// Desafio 1
console.log("------ Desafio 1 ------");
let mensajeBienvenida= "Bienvenido a ALURA - Oracle Next Education";
console.log(mensajeBienvenida);

//Desafio 2
console.log("------ Desafio 2 ------");
let nombre = "Andres Felipe Alban Diaz";
console.log(`Hola,${nombre}!`);

//Desafio 3
console.log("------ Desafio 3 ------");
alert(`Hola,${nombre}!`);

//Desafio 4
console.log("------ Desafio 4 ------");
let lenguaje= prompt('Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguaje);

//Desafio 5 
console.log("------ Desafio 5 ------");
let valor1=10;
let valor2=6;
let resultado=valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//Desafio 6
console.log("------ Desafio 6 ------");
valor1=12;
valor2=9;
resultado=valor1-val
console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado}`);

//Desafio 7
console.log("------ Desafio 7 ------");
let edad=parseInt(prompt("Por favor ingrese su edad en años"));
if(edad >=18){
    console.log("Eres mayor de edad");
}else if(edad<=0){
    console.log(`tu edad ${edad} no es valor valido`);
}else{
    console.log("Eres menor de edad");
}

//Desafio 8
console.log("------ Desafio 8 ------");
let numero =parseInt(prompt("Ingrese un numero para verificar si es postivo o negativo"))
if(numero<0){
    console.log("el numero ingresado es:Negativo");
}else if(numero>0){
    console.log(" el numero ingresado es: Positivo");
}else{
    console.log("el numero ingresado es: Cero");
}

//Desafio 9
console.log("------ Desafio 9 ------");
let contador=1;
while(contador<=10){
    console.log(contador);
    contador++;
}

//Desafio 10
console.log("------ Desafio 10 ------");
let nota=5;
if (nota>=7){
    console.log(" has Aprobado");
    
}else {
    console.log("has Reprobado");
}
console.log(`has ${nota>=7 ?'Aprobado':'Reprobado'}`);

//Desafio 11
console.log("------ Desafio 11 ------");
console.log(Math.random());

//Desafio 12
console.log("------ Desafio 12 ------");
console.log(Math.floor(Math.random()*10)+1);

//Desafio 13
console.log("------ Desafio 13 ------");
console.log(Math.floor(Math.random()*1000)+1);