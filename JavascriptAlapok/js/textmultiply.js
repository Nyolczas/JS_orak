function textMultiply(number, text) {
    var output = '';
    for (var i = 0; i < number; i++) {
        output += text;
    }
    return output;
}

console.log(textMultiply(3, 'kutya'));