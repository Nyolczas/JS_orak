var num = 12;

(function (n) {
    var apple = 'alma'; // a funkción belüli változókat nem látja a program többi része.
    n++;
    console.log(apple + n);
})(num)

console.log('kint ugyanez: ', num);

var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = (function (i) {
        return function () {  // a kiíró függvény be lett csomagolva egy másik függvénybe
            console.log(i);
        };
    }) (i); // az i-ből másolat lett, ezért tudja növelni
}

arr[0]();


var arrayForEach = [];

[0, 1, 2, 3, 4].forEach(function(e) {
    arrayForEach[e] = function() {
        console.log(e);
    };
});

arrayForEach[0]();
arrayForEach[1]();
arrayForEach[2]();
arrayForEach[3]();
arrayForEach[4]();

// ugyanez egyszerűbben:

var arrayMap = [0, 1, 2, 3, 4].map(function(e) {
    return function() {
        console.log(e);
    };
});

arrayMap[0] ();
arrayMap[1] ();
arrayMap[2] ();
arrayMap[3] ();
arrayMap[4] ();