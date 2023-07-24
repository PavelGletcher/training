let line = document.querySelector ('.slider--line');
let btnright = document.querySelector ('.slider--btn--right');
let btnleft =  document.querySelector ('.slider--btn--left');
let go = 0;
let start = 0;

btnright.addEventListener ('click', function (){
    go = go + 25;
    line.style.transform = 'translateX(' + -go + '%)';
    console.log (go);
    if (go > 50) {
        go = -25;
    }
});

btnleft.addEventListener ('click', function (){
    go = go - 25;
    line.style.transform = 'translateX(' + -go + '%)';
    console.log (go);
    if (go < 25) {
        go = 100;
    }
});