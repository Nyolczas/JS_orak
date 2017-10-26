var count = 0;
function simpleCounter() {
    console.log(count);
    count++;
}

simpleCounter();
simpleCounter();
simpleCounter();
simpleCounter();
simpleCounter();

function createCounter() {
    var innerCounter = 0;
    return function() {
        console.log(innerCounter);
        innerCounter++;
    };
};

var counter1 = createCounter(); // egységbe zárja a belső számlálót így megmarad
var counter2 = createCounter();
counter1();
counter1();
counter1();
counter2();
counter2();
counter1();
counter1();