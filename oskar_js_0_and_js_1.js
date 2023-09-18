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
let dotFive = 0.5;
let dotTwo = 0.2;
let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let four = 4;

let married = true;
let student = true;
let hasCar = false;
let hasBike = false;
let hasScooter = true;
let eatBread = true;

// js_1

//1. Retornar un string.
const returnString = (str) => str;

console.log(returnString("Texto"));

//2. Retornar una suma.
const add = (x, y) => x + y; 

console.log(add(3, 2));
console.log(add(one, dotFive));

//3. Retornar una resta.
const subtract = (x ,y) => x -y;

console.log(subtract(3, 2));
console.log(subtract(dotFive, dotTwo));

//4. Retornar una multiplicación.
const multiply = (x, y) => x * y;

console.log(multiply(2, 4));
console.log(multiply(two, three));

//5. Retornar una división.
const split = (x, y) => x / y;

console.log(split(4, 2));
console.log(split(four, 2));

//6. Comparar números.
const equality = (x, y) => x == y ? true : false;

console.log(equality(2, 3));
console.log(equality(three, 3));

//7. Comparar la longitud de dos strings.
const lengthMatch = (str1, str2) => 
    str1.length == str2.length 
    ? true
    : false;

console.log(lengthMatch("hola", "Pepe"));
console.log(lengthMatch(firstName, secondName));

//8. Comparar un parámetro I.
const smallerThanNinety = (num) => num < 90 ? true : false;
    
console.log(smallerThanNinety(91));
console.log(smallerThanNinety(age));

//9. Comparar un parámetro II.
const greatherThanFifty = (num) => num > 50 ? true : false;

console.log(greatherThanFifty(40));
console.log(greatherThanFifty(birthYear));

//10. Retornar el módulo o resto.
const modulus = (x, y) => x % y;

console.log(modulus(3, 2));
console.log(modulus(two, 2));

//11. Comprobar si es par.
const isEven = (num) => num % 2 == 0 ? true : false;

console.log(isEven(8));
console.log(isEven(three));

//12. Comprobar si es impar.
const isOdd = (num) => num % 2 == 0 ? false : true;

console.log(isOdd(8));
console.log(isOdd(three));

//13. Elevar un número al cuadrado.
const squaring = (num) => num * num;

console.log(squaring(two));

//14. Elevar un número al cubo.
const cube = num => Math.pow(num, 3);

console.log(cube(2));

//15. Elevar un número a un exponente.
const raise = (num, exponent) => Math.pow(num, exponent);

console.log(raise(2, 4));

//16. Redondear un número.
const roundNumber = num => Math.round(num);

console.log(roundNumber(2.5));
console.log(roundNumber(dotFive));

//17. Redondear un número hacia arriba.
const roundNumberUp = num =>
    num - Math.round(num) < 0.5
    ? num = Math.round(num) + 1
    : num = Math.round(num);

console.log(roundNumberUp(2.2));
console.log(roundNumberUp(dotTwo));

//18. Retornar un número aleatorio.
const randomNumber = () => Math.random(0, 1);

console.log(randomNumber());

//19. Comprar si un numero es positivo.
function isPositive(num){
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

console.log(isPositive(2));
console.log(isPositive(-2));
console.log(isPositive(0));

//20. Concatenar strings I.
const addExclamation = (str) => `${str}!`;

console.log(addExclamation(firstName));

//21. Concatenar strings II
const conbineName = (name, lastName) => name + " " + lastName;

console.log(conbineName(firstName, lastName));

//22. Concatenar strings III.
const greet = (name) => `Hola ${name}!`;

console.log(greet(firstName));

//23. Operaciones matemáticas I.
const rectangleArea = (width, height) => width * height;

console.log(rectangleArea(two, three));

//24. Operaciones matemáticas II.
const squarePerimeter = (side) => side * 4;

console.log(squarePerimeter(four));

//25. Operaciones matemáticas III.
const triangleArea = (base, height) => (base * height)/2;

console.log(triangleArea(2,3));

//26. Operaciones matemáticas IV.
const euroToDolar = (euros) => 
    `${euros} euros son: ${euros * 1.2} dolares.`;

console.log(euroToDolar(2));

//27. Condicionales.
function isVocal(letra){
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    if(letra.length > 1){
        return "Dato incorrecto";
    }else if(vocales.includes(letra)){
        return "Es vocal";
    }
}

console.log(isVocal('a'));
console.log(isVocal('b'));
console.log(isVocal('ab'));