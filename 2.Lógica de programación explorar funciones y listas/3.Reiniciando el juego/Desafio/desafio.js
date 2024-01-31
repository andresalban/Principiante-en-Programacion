// Desafio 1
function calcularIMC(altura,peso) {
    return (peso)/Math.pow(altura, 2)
}
console.log(calcularIMC(1.63,60));


// Desafio 2
function calcularFactorial(n1){
    if (n1===1 || n1===0) {
        return 1;
    }else{
        return n1*calcularFactorial(n1-1);
    }
}
console.log(calcularFactorial(4));

//Desafio 3
function convertirAReales(dolar) {
let dolarReal=4.80;
return dolarReal*dolar;
}
console.log(convertirAReales(50));

//Desafio 4
function calcularAreaPerimetroRectangulo(alto,ancho) {
    return `el Area es ${alto*ancho}, y el perimetro es ${(alto+ancho)*2}`;
}

console.log(calcularAreaPerimetroRectangulo(3,5));

//Desafio 5
function calcularAreaPerimetroCirculo(radio) {
    return `el area es ${3.14*(radio*radio)} y el perimetro es ${2*3.14*radio}`;
}
console.log(calcularAreaPerimetroCirculo(4));

//Desafio 6
function tablaMultiplicar(n1) {
    for (var i = 0; i <= 10; i++) {
        let result = n1*i
        console.log(`${i} * ${n1} = ${result} `); 
    }
}
console.log(tablaMultiplicar(2));