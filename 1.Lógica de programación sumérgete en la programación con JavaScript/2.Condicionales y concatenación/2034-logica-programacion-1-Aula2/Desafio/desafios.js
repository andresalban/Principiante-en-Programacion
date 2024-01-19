//Desafio 1

// el valor ingresado almacenado en una variable y convertido a mayusculas
let diaSemana=prompt("Que dia de la semana es hoy").toUpperCase();
//se evalua el dia de la semana
if (diaSemana=="DOMINGO" || diaSemana=="SÁBADO"){
    alert("¡Buen fin de semana!");
}else{
    alert("Buena semana!");
}

//Desafio 2
// el numero es almacenado en una variable
let numeroUsuario =prompt("Ingrese un numero para evaluar si es positivo o negativo");
//se evalua el numero ingresado
if(numeroUsuario>=0){
    
    alert("el numero ingresado es positivo");
}else{
    alert("El numero ingresado es negativo");
}

//Desafio 3
//se le piede la puntuacion al usuario y se almacena en una variable
let puntuacion= prompt("Ingrese su puntuacion");
// se evalua la puntuacion
if(puntuacion>=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar.");
}

//Desafio 4

//se crea una variable para almecenar el saldo de la cuenta
let saldoCuenta= 30000;
//se muestra el saldo de la cuenta
alert(`Saldo cuenta es: $${saldoCuenta}`);

//Desafio 5
//se le pide al usuario que ingrese su nombre
let nombreUsuario=prompt("ingresa tu nombre");
//se muesta un mensaje de bienvenida al usuario concatenando su nombre
alert(`Bienvenido ${nombreUsuario}`);