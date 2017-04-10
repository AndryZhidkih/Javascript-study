//глобальный объкт
//infinity бесконечность
//NaN // не равен NaN
/*
10==10//true
var a=[];
a.length;
Math.PI//Статические свойства
Math.pow()//Статические свойства
*/
/*
var n=12345.679
n.ToFixed(2)// округление сколько чисел после запятой
// ParseInt("25.456") возвращает целое число 
// ParseFloat("25.45") исчет точку и выводит число
// ParseInt("FF", 16) шистнадцатиричная система
// toString(16)// переводит в 16ричное значение
                                //Строки
// hello world!// каждая строка храниться в своей ячейке
// "hello".lenght // узнает длину строки, в данном примере 5
// "hello".concat(" ", "world") // прибавление строки к строке, толком не используеться
// "hello".toLowerCase() // маленькие буквы и наоборот .toUpperCase()
// "Hello".charAt(1)// позиция символа счет с нуля
// "hello".charCodeAt(1)// возвращает 10чное представление юникодного символа
// string.fromCharCode(101) // вытаскивает букву с кода юнгикод можна приводить числа через запятую
//  
var s="просто пример"
var x=s.slice(3,6); // сто
var x=s.substring(3,6);// сто
var x=s.slice(6); // пример
var x=s.slice(6,3); // ""
var x=s.substring(6,3);// сто 
var x=s.substring(-6,-3); // при
// посик по строке
// var x=s.indexOf("пр");// 6 считает пробелы
// var x=s.indexOf("пр",7);// исчет с 7мой позиции //13
// var x=s.lastIndexof("пр"); // 13
// var x=s.lastIndexof("пр",9);// 6
var x=s.split(" "); строку в масив
// регулярные выражения
//var re= /.../;
//var s="...";
//s.search(re)//
//re.test(s)
//"vasya@mail.ru".search(/@/);// 5
//"vasya@mail.ru".search(/gmail|yandex/);// -1
//gmail|yandex/.test("vasya@mail.ru");// false
//[a,b,c].test("vasya@mail.ru");// естли в строке одна из трех букв// true
//[^a,b,c].test("vasya@mail.ru");// не должно быть abc
//[a-zA-Z].test("vasya@mail.ru");диапазон
//[0-9].test("vasya@mail.ru");
//[a-zA-Z0-9_].test("vasya@mail.ru")
// \w/.test("vasya@mail.ru")// аналог предыдущего
// \W/.test("vasya@mail.ru")// отрецание
//\d/.test// цифры от 0 до 9 отрицание большое
//. /это любой символ
// ab{2,4}c/.test("abc")// б минимум 2 до 4рех бббб//
// ab{2,}c/.test("abc")// нижний предел
// ab{2}c/.test("abc")// строго 2б
// ^// начинать с начала строки
//$// конец
// флаги
/^\d{1,2}-\d{1,2}\d{4}$/;// 
/b/i.test(aBc);// игнор регистра всеравно какой регистр
/b/ig.test("aBc");// g глобал тоисть ищет все вхожднения не только первые
/b/ig.test("aBc")
/^bef/im.test("ABC\nDEF\nXYZ")//  m проверяет все строки 
// групировка
*/
/*
"......"
"..."   

var x=/['"][^'"]*['"]/;
var x=/(['"])[^'"]*\1/;  ()- ссилка 1- номер ссилки тоесть обращение к ней
*/
// внешние ссылки
/*
var re=/(['"])[^'"]*\1/;
"12BnM"
.replace(/^(/d{1,}+)([a-z]+)$/i, "$2-$1");// $ доступ к сылке
"BnM-12"
*/

// нужно что бы получилось
/*
"John Smith\nMike Dow\nsteve Lees"

var s="Smith, John\nDow, Mike\nLee, Steve";
s.replace(/([a-z]+), ([a-z]+)/ig, "$2 $1");
*/
/*
"vasya@mail.ru".match(/([a-z]+)@([a-z]+)\.([a-z]{2,})/i);
*/
// regexlib














