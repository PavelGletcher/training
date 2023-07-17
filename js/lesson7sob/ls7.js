//мой вариант замены классов
/*
document.querySelector('.btn').addEventListener('click', function(){
  document.querySelector('.btn').classList.add ('open');
})
document.querySelector('.btn2').addEventListener('click', function(){
  document.querySelector('.btn').classList.remove ('open');
})

document.querySelector('.btn2').addEventListener('click', function(){
  document.querySelector('.btn2').classList.add ('open');
})
document.querySelector('.btn').addEventListener('click', function(){
  document.querySelector('.btn2').classList.remove ('open');
})
*/

/* считаем клики
var click = 0;
function onClickbutton() {
  click++;
  console.log(click)
}
*/

/*ВЫВОД ДАННЫХ НА ЭКРАН
var click = 0;
function onClickbutton(el) {
  click++;
  el.innerHTML = "Нажатий на кнопку: "+click;
  console.log (el.name); // вывод значения с атрибута
}
*/
/*
//ПОЛУЧЕНИЕ ДАННЫХ С ЭКРАНА
function onClickbutton(el){
  if (el.value == "hello") {
  alert ("Здорова");
  }
  console.log (el.value);
}

//el.style.background = "red" - обращение к css свойству el.style
//el.style.cssText = "Border-radius: 5px; background-color: red" - обращение к css для работы как в файле
*/
/*
function m() {
  alert ('A');
  m.innerHTML = ('Слово');
}

document.querySelector ('.btn').addEventListener ('click', m);
*/


