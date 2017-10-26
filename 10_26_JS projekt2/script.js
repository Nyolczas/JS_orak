function getItem(number){
    let selector = 'element-' + number;
    return document.getElementById(selector);
}

let itemThree = getItem('three');
console.log(itemThree);

/*
Vizsgáljuk meg a fenti function-t, és a továbbiakban használjuk a különböző <div> elementek id alapján való kikérésére.
*/

//1. doboz: 
//Kattintásra adjunk hozzá egy "blur" nevű class attribútumot.

getItem('one').onclick = function(){
    this.classList.add('blur');
}
getItem('one').ondblclick = function(){
    this.classList.remove('blur');
}

//2. doboz:
//Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra.

getItem('two').onmouseover = function(){
    this.style.backgroundColor = 'red';
}

getItem('two').onmouseout = function(){
    this.style.backgroundColor = 'firebrick';
}

function getRandomNumberBetweenOneAndTwenty(){
    return Math.floor(Math.random() * 20) + 1;
}

//3. doboz:
//Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát.

getItem('three').ondblclick = function(){
    let number = getRandomNumberBetweenOneAndTwenty();
    this.innerHTML = '<span class="text">'+ number + '</span>';
}

function hideElement(element){
    element.classList.add('hidden');
}

//4. doboz:
//Kattintásra tűnjön el, majd egy 1 másodperces várakozás, (timeout) után ismét jelenjen meg.

function showElement(){
    getItem('four').classList.remove('hidden');
}

function showElementWithDelay(){
    setTimeout(showElement, 1000);
}

getItem('four').onclick = function(){
    this.classList.add('hidden');
    showElementWithDelay();
}

//5. doboz:
//Kattintásra alakítsa kör alakúra az összes dobozt. (Kikötés: ezt loop segítségével érjük el!)

getItem('five').onclick = function(){
    let shapes = document.querySelectorAll('.shape');
    for(shape of shapes){
        shape.style.borderRadius = '50%';
    }
}
 
function getValueOfNumberThreeElement(){
    return parseInt(getItem('three').querySelector('.text').innerHTML);
}

function getValueOfNumberSixElement(){
    return parseInt(getItem('six').querySelector('.text').innerHTML);
}

//6. 7. 8. doboz:
//Nézzünk utána a setInterval() nevű function használatának.
//Segítségével hozzunk létre egy function-t, ami másodpercenként megvizsgálja, hogy a 3. dobozban lévő számérték nagyobb lett-e, mint a hatodik doboz számértéke.
//Ha igen, változtassa a 6., 7. és 8. doboz háttérszínét "lightgreen"-re.
//Ha nem, változtassa a dobozok színét eredeti értékükre.

window.setInterval(
    function(){
        if(getValueOfNumberThreeElement() > getValueOfNumberSixElement()){
            getItem('six').style.backgroundColor = 'lightgreen';
            getItem('seven').style.backgroundColor = 'lightgreen';
            getItem('eight').style.backgroundColor = 'lightgreen';
        } else {
            getItem('six').style.backgroundColor = 'forestgreen';
            getItem('seven').style.backgroundColor = 'cadetblue';
            getItem('eight').style.backgroundColor = 'seagreen';
        }
    }, 1000
);

//9. doboz:
//Oldalletöltésre hozzuk létre a 9. dobozt úgy, hogy a többi doboznak megfelelő child elementtel, valamint id és class attribútumokkal rendelkezzen. 

window.onload = function(){
    let lastDiv = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = '9';
    span.setAttribute('class', 'text');
    lastDiv.setAttribute("id", "element-nine");
    lastDiv.setAttribute("class", "shape");
    lastDiv.appendChild(span);
    document.querySelector('.container').appendChild(lastDiv);
}


