



//ТРЕТЬЕ РЕШЕНИЕ НЕ ОТЛАЖЕНО
/*
let array = document.querySelectorAll('.slider--item');
let go = 0;
for (let i = 0; i < array.length; i++) {
    const slditem = array[i];
    let btntight = document.querySelector('.slider--btn--right');
    btntight.addEventListener('click', function () {
        go = go + 100;
        slditem.style.transform = 'translateX(' + go + '%)';
    });
}
for (let i = 0; i < array.length; i++) {
    const slditem = array[i];
    let btntight = document.querySelector('.slider--btn--left');
    btntight.addEventListener('click', function () {
        go = go - 100;
        slditem.style.transform = 'translateX(' + go + '%)';
    });
};
*/

//ВТОРОЕ РЕШЕНИЕ НЕ ОТЛАЖЕНО
/*
let sldstart = 0;
let slditem = document.querySelectorAll ('.slider--item');

for (let i = 0; i < slditem.length; i++) {
    document.querySelector ('.slider--btn--right').addEventListener ('click', function(){
    sldstart = sldstart + 33.3333333
    slditem[0].style.transform = 'translateX('+sldstart+'%)';
    slditem[1].style.transform = 'translateX('+sldstart+'%)';
    slditem[2].style.transform = 'translateX('+sldstart+'%)';
});}

for (let i = 0; i < slditem.length; i++) {
    document.querySelector ('.slider--btn--left').addEventListener ('click', function(){
    sldstart = sldstart - 33.3333333;
    slditem[0].style.transform = 'translateX('+sldstart+'%)';
    slditem[1].style.transform = 'translateX('+sldstart+'%)';
    slditem[2].style.transform = 'translateX('+sldstart+'%)';
});}
*/


//ПЕРВОЕ РЕШЕНИЕ НЕ ОТЛАЖЕНО
/*
let sldstart = 0;
let slditem = document.querySelectorAll ('.slider--item');
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
*/