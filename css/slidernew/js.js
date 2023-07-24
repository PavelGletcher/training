let line = document.querySelector ('.slider--line');
let btnright = document.querySelector ('.slider--btn--right');
let btnleft =  document.querySelector ('.slider--btn--left');
let btndot = document.querySelector ('.slider--dot--item');
let btndot2 = document.querySelector ('.slider--dot--item2');
let btndot3 = document.querySelector ('.slider--dot--item3');
let btndot4 = document.querySelector ('.slider--dot--item4');
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
    };
});

btndot.addEventListener ('click', function (){
    line.style.transform = 'translateX(' + 0 + '%)';
})
btndot2.addEventListener ('click', function (){
    line.style.transform = 'translateX(' + -25 + '%)';
})
btndot3.addEventListener ('click', function (){
    line.style.transform = 'translateX(' + -50 + '%)';
})
btndot4.addEventListener ('click', function (){
    line.style.transform = 'translateX(' + -75 + '%)';
})