// sorkomment
/*
blokk komment
*/
//alert('hello!');

console.log('Helló Konzol!');

var udvozles = 'szia !!!';

var szuletesiEv = 1991; // szám

var isReady = true; //boolean

// objektum

var person = {
    firstName: 'István',
    lastName: 'Nyolczas',
    address: {
        street: 'Váci út',
        city: 'Budapest'
    }
}

// tömb

var cars = ['VW',
            123,
            true,
            person.firstName];

console.log(cars[2]);

//függvény

function displayFullName(firstName, lastName) {
    var fullName = (firstName + ' ' + lastName);
    return fullName;
}

var teljesnev = displayFullName(person.lastName, person.firstName);

console.log(teljesnev);

//függvény meghívása

// anonim függvény

var anonimFuggveny = function () {
    console.log(' anonim függvény vagyok');
}

//operátorok

var n1 = 10;
var n2 = 20;

var sum = n1 + n2;

var kulonbozet = n2 - n1;

var szorzat = 3 * 4;

var hanyados = 12 / 4;

var modulus = 9 % 4;

console.log(modulus);

var int = 3;

int++;

console.log(++int);

// logikai operátorok
// logikai ÉS &&
var isSomething = true && false;
console.log(isSomething);

// logikai VAGY ||
var isSomething2 = true || false;
console.log(isSomething2);

// Logikai NEM
console.log(!true + ' Logikai NEM');
// összehasonlító operátor
console.log(3 >= 2);

console.log('1' == 1); // egyenlő érték

console.log('1' === 1); // egyenlő érték és típus

console.log('1' != 1); // nem egyenlő érték

console.log(('1' !== 1) + ' -nem egyenlő érték és típus'); // nem egyenlő érték és típus

if (1 === 1) {
    console.log('egyenlő');
} else {
    console.log('nem egyenlő');
}

var eletkor = 42;

if (eletkor >= 18) {
    console.log('Tartalom megtekinthető!');
} else {
    console.log('Túl fiatal vagy!');
}

function isUserOldEnough(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isUserOldEnough(15));
