console.log('hello');

var tomb = [
    '8-I',
            123,
            true,
            function () {console.log('funkcijó')},
    {firstName: '8-I'}
];


for (var i = 0; i < tomb.length; i++) {
    console.log(tomb[i]);
}

console.log(tomb[3]());

// ES-6 verzió of for

for(var aktualisElem of tomb) {
    console.log(aktualisElem);
}


