var outerNumber = 1;

function incrementNumber(number) {
    number++;
    console.log('var: ', number, ' in the function');
}

incrementNumber(outerNumber);
console.log('var: ', outerNumber, ' outside');
// Objektum
var outherObj = {number: 1};

function incrementObject(obj) {
    obj.number++;
    console.log('obj: ', obj.number, ' in the function');
}

incrementObject(outherObj);
console.log('obj: ', outherObj.number, ' outside');
// Array
var outherArr = [1];

function incrementArr(arr) {
    arr[0]++;
    console.log('arr: ', arr[0], ' in the function');
}

incrementArr(outherArr);
console.log('arr: ', outherArr[0], ' outside');