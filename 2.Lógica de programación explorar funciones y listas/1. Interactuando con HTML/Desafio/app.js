// Desafio 1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

// Desafio 2
function mensajeConsola(){
    console.log('El botón fue clicado');
}

//Desafio 3
function accionPrompt(){
    let cuidadBrasil= prompt('Ingrese una en nombre de una cuidad de brasil');
    alert(`Estuve en ${cuidadBrasil} y me acordé de tí`);
}

//Desafio 4
function mensajeAlerta(){
    alert('Yo Amo JS');
}

//Desafio 5
function suma(){
    let numero1 = parseInt(prompt('Vamos a realizar una suma,por favor ingresa el primer numero'));
    let numero2 = parseInt(prompt('Por favor ingresa el segundo numero'));
    
    let result= numero1+numero2;
    alert(`la suma de ${numero1} y ${numero2} es igual a ${result}`);
}
