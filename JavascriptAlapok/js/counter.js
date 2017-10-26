var counter = (function () {
    var cnt = 0;
    return function () {
        console.log(cnt);
        cnt++;
    }
}) ();

counter();
counter();
counter();
counter();
counter();

// console.log(cnt); ERROR (kívülről nem látja) 
