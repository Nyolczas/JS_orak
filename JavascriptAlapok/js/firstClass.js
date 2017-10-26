var osszead = function add(a, b) {
    return a + b;
}

console.log(osszead(1,2));

function hello() {};
// var hello = function() {}

function addText(text1, text2, addFn) {
    return addFn(text1, text2);
}

console.log(addText('alma', 'fa', osszead));

console.log(addText('alma', 'fa', function(a, b) {
    return a + b + '!' ;
}));

// valóságosabb példa: forEach

var tomb = [1, 2, 3, 4];

tomb.forEach(function(element, index, arr){
    console.log(element, index, arr);
});

tomb.forEach(console.log);

function shout(a) {console.log(a + '!'); };

[5, 6, 7, 8].forEach(shout);
