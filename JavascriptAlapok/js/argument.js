function hello() {
    console.log('Szia!');
}

hello();
hello(123);

function printArguments(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

printArguments(5,6,7);
printArguments(8,9);

function printArguments2() {
    console.log(arguments);
}

printArguments2('alma', 'körte', 'dinnye');

function printArguments3(...arg) {
    console.log(arg);
}

printArguments3('alma', 'körte', 'dinnye');
