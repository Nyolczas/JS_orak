var numbers = [1, 32, 99, 24, 7, 333, 666, 56, 321, 7891254];
var ul = document.querySelector('ul');
var lilist = '';
var biggest = numbers[0];
for (var i = 0; i < numbers.length; i++){
    lilist += '<li>'+numbers[i]+'</li>';
    if(numbers[i] > biggest){
        biggest=numbers[i];
    }
}

ul.innerHTML = lilist;

function titkosit() {
    var T = parseInt(document.querySelector('#T').value);
    var e = parseInt(document.querySelector('#e').value);
    var N = parseInt(document.querySelector('#N').value);
    
    //var C = T ^ e mod N; hatványozás
    //var C = Math.pow(T, e) % N; nem pontos a Math.pow!!!
    var otherPaper=1;
    for(var i = 0; i < e; i++) {
        otherPaper *= T;
        otherPaper = otherPaper % N;
        //console.log(otherPaper);
    }
    
    alert("Eredmény: " + otherPaper);
}