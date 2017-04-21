/*
Объявите две переменные: admin и name.
Запишите в name строку "Василий".
Скопируйте значение из name в admin.
Выведите admin (должно вывести «Василий»).
*/
/*
"use strict"
var admin;
var name;
var name="Василий";
var admin=name
alert(admin);
*/
/*
Создайте переменную для названия нашей планеты и присвойте ей значение "Земля". Правильное имя выберите сами.
Создайте переменную для имени посетителя со значением "Петя". Имя также на ваш вкус.

var OurPlanerName= "Земля";// Земля
var userName="Петя";
*/
/*
Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
*/
/*
function isInteger(num){
 if (num){
 	return num
 }
 else{
 	return false
 }
}
alert (isInteger(2));
*/
/*
Создайте страницу, которая спрашивает имя и выводит его.
*/
/*
var yourName=prompt("Как вас зовут?","")
alert("Вас зовут "+yourName+" congradilation");
*/
/*
Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».

Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
*/
/*
var ofNameJava=prompt("Каково  официальное  название JavaScript?","")


if(ofNameJava=="ECMAScript"){
	 alert("Верно");
	 }
	 else{
	  alert('Не знаете? "ECMAScript"!');	
	 }
	
*/
/*
Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
*/
/*
 var num=prompt("Введите число","")
 if(num>0){
 	alert(1);
 }
 else if(num<0){
 	alert(-1);
 }
  else if(num==0){
  	alert(0);
  }
  */
  /*
Напишите код, который будет спрашивать логин (prompt).
Если посетитель вводит «Админ», то спрашивать пароль, 
если нажал отмена (escape) – выводить «Вход отменён»,
если вводит что-то другое – «Я вас не знаю».
Пароль проверять так. Если введён пароль «Чёрный Властелин», 
то выводить «Добро пожаловать!», 
иначе – «Пароль неверен», при отмене – «Вход отменён».
  */
  //var adm="Админ"
  //var password="Сладкий Властелин"
  /*
  var logAdm=prompt("Кто пришел?", "")
 		 if(logAdm=="Админ"){
  		
	var pass=prompt("Пароль?", "")
  		if(pass=="Сладкий Властелин"){
  			alert("Привет")
  	   } 
  		else if(logAdm==null){
  		alert("Вход отменен")
       }
   		else{
  		alert("Я вас не знаю")
      }
  } else if(logAdm==null){
  	alert("Вход отменен")
  }
  else{
  	alert("Я вас не знаю")
  }

*/
/*
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости – оформляйте код в несколько строк.
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/
/*
message (login == 'Вася') ? 'Привет': 
 (login == 'Директор') ? 'Здравствуйте':
 (login == '') ? 'Нет логина':
 "";
*/
// Проверка if диапазона
/*
Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

«Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.

if(age>=14&& age<=90)
	
 
 
*/
//Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.
//Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.
/*
if(!age>=14&& age<=90)
if (age<14 && age>90)
*/
/*При помощи цикла for выведите чётные числа от 2 до 10.*/
/*
for(i=2;i<12;i++){
	if(i%2)continue
		
	alert(i);
} 

*/
/*
for(i=2;i<12;i++){
	if(i%2==0)
	alert(i);
} 

for(i=0;i<10;i++){
	if(i%2==0)continue
		alert(i);
}*/
//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
/*for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}

	var i=0;
do{
	alert( "номер " + i + "!" );
	i++
}

while(i<3){
	
}
*/
/*
Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
либо не нажмёт кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
/*
do{
	var userNumb=prompt("Введите число больше 100", "0")
}
while(userNumb<=100){
}

alert("Все верно")
*/
/*
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

 if(browser==IE){
	 alert( 'О, да у вас IE!' );
 }
else if(browser==Chrome
	||Firefox
	||Safari
	||Opera){
 alert( 'Да, и эти браузеры мы поддерживаем' );
}
else{
	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
	
	*/
	/*
	Перепишите код с использованием одной конструкции switch:

 var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
/*
var a = +prompt('a?', '');
switch(a){
	case 0:
	alert( 0 )
	break;
 case 1:
  alert( 1 )
  break;
  case 2:
  case 3:
  alert( '2,3' );
  break;
}

*/
/*
function calcD(a, b, c) {
   return  b*b - 4*a*c; 
}

var test = calcD(-4, 2, 1);
alert(test); // 20
*/
/*
Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.
 В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } 
    return confirm('Родители разрешили?'); 
}
checkAge(21);
*/

/*
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. 
Сделайте два варианта функции checkAge:
Используя оператор '?'
Используя оператор ||
*/
/*
function checkAge(age) {
 return (age > 18) || confirm('Родители разрешили?')
  
}
checkAge();
/*
function checkAge(age) {
  (age > 18) return true;
    
  
    return confirm('Родители разрешили?'); 
}
checkAge(2);
*/
/*
Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
решение
*/
/*
function min(a,b){
	if(a>b){
		 return alert(b);
	}
	else if(a<b){
		 return alert(a);
  } 
  return  alert(a);
}

min(2, 5) 
min(3, -1) 
min(1, 1)
*/
/*
Запишите функцию pow(x,n), которая возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
P.S. В этой задаче функция обязана
 поддерживать только натуральные значения n, т.е. целые от 1 и выше.
*/
/*
function pow(x,n){
	x=prompt("x?",0)
  n=prompt("n?",0)
	if(n>=1){
		return alert(Math.pow(x,n))
	}

}
pow()

*/
/*
function pow(x,n){
	var result=x;
	for(var i=1;i<n;i++){
		result*=x; 
		
	}
	return result;
}

  x=prompt("x?",1)
	n=prompt("n?",1)
	if(n>=1){
		alert(pow(x,n));
	}
	else{
		alert("Введите число больше 0, Спасибо!!!" );
	}
*/
/*
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:

ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке
*/
/*
function ucFirst(str){
	var newStr=str[0].toUpperCase()+str.slice(1);
if(str==""){
	return	alert(newStr.charAt(0))
}
return	alert(newStr)
}
ucFirst("вова")
*/
/*
Напишите функцию checkSpam(str), которая возвращает true,
 если строка str содержит „viagra“ или „XXX“, а иначе false.
Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
/*
function checkSpam(str){
	var newStr=str.toLowerCase();
	if(newStr.indexOf("viagra")!=-1||newStr.indexOf("xxx")!=-1){
	return alert(true);
	}
	else{
		return alert(false);
	}
 
}
checkSpam('buy ViAgRA now') ;
checkSpam('free xxxxx');
checkSpam("innocent rabbit") ;
*/
/*
Создайте функцию truncate(str, maxlength), 
которая проверяет длину строки str,
и если она превосходит maxlength – заменяет конец str на "...",
так чтобы ее длина стала равна maxlength.
Результатом функции должна быть (при необходимости) усечённая строка.
Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
truncate("Всем привет!", 20) = "Всем привет!"
Эта функция имеет применение в жизни. Она используется, чтобы усекать слишком длинные темы сообщений.
*/
/*
function truncate(str, maxlength){
  if(str.length>maxlength){
	return alert(str.slice(0,maxlength -3)+"...")
	}
	else{
		return alert(str+"...")
	}
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);
*/
/*
Выделить число
важность: 4
Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), 
которая будет из такой строки выделять число-значение, в данном случае 120.
*/
/*
function extractCurrencyValue(str){
alert(+str.slice(1));
}
 extractCurrencyValue("$120")
 */
 /*
 Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.

Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта.
*/
/*
var user{};
user.name="Вася";
user.surname="Петров";
user.name="Сергей";
*/
/*
Создайте функцию isEmpty(obj), которая возвращает true,
 если в объекте нет свойств и false – если хоть одно свойство есть.
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
*/
/*

Получить последний элемент массива
важность: 5
Как получить последний элемент из произвольного массива?

У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.

Напишите код для получения последнего элемента goods
*/
/*
var goods=[1,2,3,4,5,6]
var lastItem = goods[goods.length - 1]; 
*/
/*
var goods=[1,2,3,4,5,6];
goods.push("Компьютер");
alert(goods)
*/
/*
Задача из 5ти шагов
Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». 
Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:

Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл
*/
/*
var styles=["Джаз", "Блюз"];
styles[styles.length]="Рок-н-Ролл";
styles[styles.length-2]="Классика";
styles.shift();
alert(styles)
styles.unshift("Рэп","Регги");
alert(styles)
*/
/*
Получить случайное значение из массива
важность: 3
Напишите код для вывода alert случайного значения из массива:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));
*/
/*
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length);
alert( arr[rand] );
*/
/*
Создайте калькулятор для введённых значений
важность: 4
Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива
*/
/*
var numbers = [];
while (true) {
  var value = prompt("Введите число", 0);
  if (value === "" || value === null || isNaN(value)) break;
  numbers.push(+value);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
alert( sum );
*/
/*
Создайте функцию find(arr, value), 
которая ищет в массиве arr значение value и возвращает его номер, 
если найдено, или -1, если не найдено
*/
/*
function find(array, value) {
  if (array.indexOf) { // если метод существует
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

var arr = ["a", -1, 2, "b"];

var index = find(arr, 2);

alert( index );
*/
/*
Фильтр диапазона
важность: 3
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, 
который содержит только числа из arr из диапазона от a до b.
 То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
теперь filtered = [5, 4, 3]
 arr не изменился
*/
/*
function filterRange(arr, a, b){
	var result=[];
for(var i=0; i<arr.length; i++){
	if(arr[i]>=a&&arr[i]<=b){
		 result.push(arr[i]);
	  }
	}
		return result
}
var arr = [5, 4, 3, 8, 0];
alert(filterRange(arr,3,5));
*/
/*
Добавить класс в строку
важность: 5
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
*/
/*
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }
  classes.push(cls); // добавить
  obj.className = classes.join(' '); // и обновить свойство
}
var obj = {
  className: 'open menu'
};
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me
alert(addClass(obj, 'new');)
*/
/*
Перевести текст вида border-left-width в borderLeftWidth
важность: 3
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.

*/
/*
function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}
alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransition
*/
/*
Создайте объект calculator с тремя методами:
read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
var calculator = {
  ...ваш код...
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
/*
var calculator = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
}

calculator.read();
alert( calculator.sum() );
*/
alert( calculator.mul() );