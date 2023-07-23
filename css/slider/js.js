let sldstart = 0;
let slditem = document.querySelector ('.slider--item');


document.querySelector ('.slider--btn--right').addEventListener ('click', function(){
    sldstart = sldstart + 100;
    if (sldstart >= 300) {
        sldstart = 0;
    }
    slditem.style.transform = 'translateX('+sldstart+'%)';
});

document.querySelector ('.slider--btn--left').addEventListener ('click', function(){
    sldstart = sldstart - 100;
    if (sldstart <= -100) {
        sldstart = 200;
    }
    slditem.style.transform = 'translateX('+sldstart+'%)';
});