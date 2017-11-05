var doboz = jQuery("#doboz");
var box = $(".box");
//var box = $(".box"); dollár jellel is hívhatjuk

var form = $('form');

//box.on('click', function () {
//   alert('hi!'); 
//});

//document.querySelector('.box'.onclick) = function () {};

$('input').on('keydown', function (e) {
    console.log(e)
});

function alertOnKeyUp() {
    alert('keyup esemény történt!');
}
$('input').on('keyup',alertOnKeyUp);

$('.box').on('click', function () {
    var $box = $(this);
    //console.log($box);
    //$box.addClass('red-box');
    $box.toggleClass('red-box');

    $box.html('Kevesebb');
});

$('form').on('submit', function (e) {
    e.preventDefault(); //megakadályozza az oldal újratöltését
   console.log('Regisztráció sikeres');
});

$('.box')

var innerSpan =$('.inner-span');

//console.log(innerSpan.parent().parent());

console.log(innerSpan.parent().siblings());

console.log(innerSpan.closest('ul'));

$('.inner-span').on('click', function() {
    $(this)
        .closest('.container')
        .addClass('red-box')
    .children()
    .addClass('border')
    .html(' plussz');
})