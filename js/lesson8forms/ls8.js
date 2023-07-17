/*
var txt = document.querySelector ('.text'); // поиск объекта по классу еще есть по ID
txt.innerHTML = 'lol'; // внесение изменений
console.log (txt.className);///
*/

//поиск элементов через массив
/*
document.querySelector ('.text').innerHTML = 'lol'; // внечение в одну строку
*/
/*
var spans = document.getElementsByTagName ('span'); // собираю все спаны документа
for (var i = 0; i < spans.length; i++){
  console.log (spans[i].innerHTML);
};
*/

var cls = document.getElementsByClassName ('inpt'); //БЕЗ ТОЧКИ
for (var z = 0; z < cls.length; z++){
  console.log (cls[z].innerHTML);
};