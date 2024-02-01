//Desafio 1
let listaGenerica = [];

//Desafio 2
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Desafio 3
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

//Desafio 4
function elementosLista() {
    for (var i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
elementosLista();

//Desafio 5
function elementosListaReversa() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
elementosListaReversa();

//Desafio 6
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
let suma = 0
function promedioLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}
console.log(promedioLista(listaNumeros));

//Desafio 7
let listaNumerosMayorMenor = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function numeroGrandrePequeño(lista) {
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        } if (lista[i] < menor) {
            {
                menor = lista[i];
            }
        }

    }
    console.log(`el numero mayor: ${mayor}, el numero menor: ${menor}`);
}
numeroGrandrePequeño(listaNumerosMayorMenor);

//Desafio 8
let listaSumaNumeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
suma = 0;
function sumarNumerosLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i]

    }
    return suma;
}
console.log(sumarNumerosLista(listaSumaNumeros));

//Desafio 9
let listaElemento = [1, 2, 3, 4]
function elementoParametro(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
console.log(elementoParametro(listaElemento, 2));

//Desafio 10
let listaNumeros1 = [1, 2, 3]
let listaNumeros2 = [4, 5, 6]

function sumarListas(lista1, lista2) {
    let listasuma = []
    for (let i = 0; i < lista1.length; i++) {
        listasuma.push(lista1[i] + lista2[i]);
    }
    return listasuma;
}

console.log(sumarListas(listaNumeros1, listaNumeros2));

//Desafio 11
let listaNumerosCuadrado = [2, 4, 6]

function listaCuadrado(lista) {
    let listaRessultado = []
    for (let i = 0; i < lista.length; i++) {
        listaRessultado.push(lista[i] ** 2)

    }
    return listaRessultado;
}
console.log(listaCuadrado(listaNumerosCuadrado));