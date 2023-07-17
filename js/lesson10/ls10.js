/*

//Создание объектов

var date = new Date(); // РАБОТА С ТЕКУЩЕЙ ДАТОЙ
//date.setDate(23);//установка своего времени
console.log (date); // вывод всей даты
console.log (date.getFullYear()); // вывод года
console.log (date.getMonth()+1); // вывод месяца
console.log (date.getDate()); // вывод дня месяца
console.log (date.getDay()); // вывод дня недели с воскресенья
console.log (date.getHours()); // вывод часов
console.log (date.getMinutes()); // вывод минут
console.log (date.getSeconds()); // вывод секунд


*/

//Свойства для массивов

//let // работает внутри блока и не дает дублироваться в сравнении с VAR

/*

let arr = [45, 37, 18, 95];
console.log (arr.length)//вывод количества элементов в массиве
console.log (arr.join (', '))//вывод элементов массива в виде строки (с разделителем)
console.log (arr.sort())//сортировка массива
console.log (arr.reverse())//сортировка массива наоборот
console.log (arr.reverse().join (', '))//сортировка массива наоборот?? + перевод в строку
let stroka = arr.reverse().join (', ');
console.log (stroka.split());// разбитие массива по символам

*/

//СОЗДАНИЕ КЛАССА И ОБЪЕКТОВ

class Person {
  constructor(name, age, happiness){
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }
  info() {
    console.log("Человек " + this.name +" Возраст: " + this.age);
    
  }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 21, false);
alex.info();
bob.info();
//console.log (alex.age);
//console.log (bob.age);