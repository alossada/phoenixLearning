// js_0

let firstName = "Oskar";
let secondName = `Danilo`
let lastName = 'Quiroga';
let countryResidence = "Colombia";
let zodiacSign = "Geminis";
let hobby = "Dibujar";
let sport = 'Ciclismo';
let signature = 'Javascript'

let age = 36;
let birthdday = 22;
let birthMonth = 6;
let birthYear = 1987;

let married = true;
let student = true;
let hasCar = false;
let hasBike = false;
let hasScooter = true;
let eatBread = true;
let on = true;
let off = false;
let likeMusic = true;


// js_1

//1. Retornar un string.
const returnString = (str) => str;

console.log(returnString("Texto"));

function devolverString(str){
    return str;
}

console.log(devolverString(firstName));

//2. Retornar una suma.
const add = (x,y) => x+y; 
console.log(add(3, 2));
console.log(add());

function suma(x, y){
    let result;
    result= x + y;
    return result; 
}

console.log(suma(age, birthdday));

//3. Retornar una resta.
function resta(x, y){
    let result;
    result= x - y;
    return result;
}

console.log(resta(age, birthdday));

//4. Retornar una multiplicación.
function multiplicar(x, y){
    let result;
    result= x * y;
    return result; 
}

console.log(multiplicar(age, birthdday));

//5. Retornar una división.
function dividir(x, y){
    let result;
    result= x / y;
    return result;
}

console.log(dividir(age, birthdday));

//6. Comparar números.
function igualdad(x, y){
    if(x == y){
        return true;
    }else{
        return false;
    }
}

console.log(igualdad(3, 3));
console.log(igualdad(birthMonth, birthYear));

//7. Comparar la longitud de dos strings.
function compararLongitur(str1, str2){
    if(str1.length == str2.length){
        return true;
    }else{
        return false;
    }    
}

console.log(compararLongitur("hola", "pepe"));
console.log(compararLongitur(firstName, lastName));

//8. Comparar un parámetro I.
const smallerThanNinety = (num) => num < 90 ? true : false;
    
console.log(smallerThanNinety());

function menorQueNoventa(num){
    if(num < 90){
        return true;
    }else{
        return false
    }
}

console.log(menorQueNoventa(89));
console.log(menorQueNoventa(birthMonth));

//9. Comparar un parámetro II.
function mayorQueCincuenta(num){
    if(num > 50){
        return true;
    }else{
        return false
    }
}

console.log(mayorQueCincuenta(89));
console.log(mayorQueCincuenta(birthMonth));

//10. Retornar el módulo o resto.
function obtenerResto(x, y){
    let result;
    result= x % y;
    return result;
}

console.log(obtenerResto(age, birthdday));
console.log(obtenerResto(10, 3));

//11. Comprobar si es par.
const isEven = (num) => num % 2 == 0 ? true : false;

console.log(isEven(8));

function esPar(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(esPar(28));
console.log(esPar(31));

//12. Comprobar si es impar.
function esImpar(num){
    if(num % 2 == 0){
        return false;
    }else{
        return true;
    }
}

console.log(esImpar(28));
console.log("Es impar: " + esImpar(31));

//13. Elevar un número al cuadrado.
function elevarAlCuadrado(num){
    return num *= num; 
}

console.log(elevarAlCuadrado(2));

//14. Elevar un número al cubo.
function elevarAlCubo(num){
    return num = Math.pow(num, 3); 
}

console.log(elevarAlCubo(2));

//15. Elevar un número a un exponente.
function elevar(num, exponent){
    return num = Math.pow(num, exponent); 
}

console.log(elevar(2, 4));

//16. Redondear un número.
function redondearNumero(num){
    return num = Math.round(num);
}

console.log(redondearNumero(2.5));
console.log(redondearNumero(2.2));

//17. Redondear un número hacia arriba.
function redondearHaciaArriba(num){
    if(num - Math.round(num) < 0.5){
        return num = Math.round(num) + 1;
    }else{
        return num = Math.round(num);
    }
}

console.log(redondearHaciaArriba(2.2));

//18. Retornar un número aleatorio.
function numeroRandom(){
    let randomNumber = Math.random(0, 1);
    return randomNumber;
}

console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());

//19. Comprar si un numero es positivo.
function esPositivo(num){
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    if(num > 0){
        return 'Es positivo';
    }else if(num < 0){
        return 'Es negativo';
    }else{
        return false;
    }
}

console.log(esPositivo(2));
console.log(esPositivo(-2));
console.log(esPositivo(0));

//20. Concatenar strings I.
function agregarSimboloDeExclamacion(str){
    return str + '!';
}

console.log(agregarSimboloDeExclamacion(firstName));
console.log(agregarSimboloDeExclamacion(firstName));

//21. Concatenar strings II
function combinarNombres(nombre, apellido){
    return nombre +' '+ apellido;
}

console.log(combinarNombres(firstName, lastName));

//22. Concatenar strings III.
function retornarSaludo(nombre){
    return 'Hola ' + nombre + '!';
}

console.log(retornarSaludo(firstName));

//23. Operaciones matemáticas I.
function areaDelRectangulo(alto, ancho){
    return alto * ancho;
}

console.log(areaDelRectangulo(2,3));

//24. Operaciones matemáticas II.
function perimetroDelCuadrado(lado){
    return lado*4; 
}

console.log(perimetroDelCuadrado(8));

//25. Operaciones matemáticas III.
function areaDelTriangulo(base, altura){
    return (base*altura)/2;
}

console.log(areaDelTriangulo(2,3));

//26. Operaciones matemáticas IV.
function deEuroAdolar(euro){
    let cambio = euro * 1.20;
    return cambio + ' Dolares';
}

console.log(deEuroAdolar(2));

//27. Condicionales.
function esVocal(letra){
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    if(letra.length > 1){
        return "Dato incorrecto";
    }else if(vocales.includes(letra)){
        return "Es vocal";
    }
}

console.log(esVocal('a'));
console.log(esVocal('b'));
console.log(esVocal('ab'));