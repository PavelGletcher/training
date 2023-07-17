//ИНТЕРВАЛЫ
/*
var id = setInterval (myfunc, 1000);// функция интервала и время в мс
var counter = 1;
function myfunc (){
console.log (counter ++);

if (counter == 3+1)
clearInterval(id);
}
*/

/*
var counter = 0;
setInterval(function (){
counter++;
console.log (counter)
//}, 1000);
*/

//ТАЙМЕРЫ

setTimeout(function() {
console.log ('Таймер работает!')
},2000);