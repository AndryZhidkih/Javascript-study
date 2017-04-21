/*
var u1={name:"john"};
var a1=[];
a1.length;
var a2=[];
a2.length;
*/
// Функция конструктор
/*
function User(name, age){
	this.name=name;
	this.age=age;
	this.admin=false;
}
var ul=new User("John", 25);
ul.admin=true;
var u2=new User("Mike", 33);
console.log(ul.constructor);// constructor // показывает что в функции конструкторе
*/
// new
/*
var n1=10;
var n2 =new Number(10)// typeof object
n2.valueOf()// извлечения данных из new
var s="Hello";
s.length // var tmp=new String(s)   это делает браузер
         // tmp.length
        // delete tmp
*/
// объектные типы
/*
var o1={};// 
var o2=new Object()// одно и тоже но смысла использовать нету

var o3=[];//
var o4=new Array[];// Без разницы
new Array(5)// создаеться массив с длиной которой мы передаем
var re=/ /;
var re=new RegExp("[a-z+]"," i");
var accept=['gmail','yandex','yahoo'];
var re=new RegExp(accept.join("|"), "i");

/gmail|yandex|yahoo/.test(email);
*/
/*
var u1=new User("John", 25);
u1.toString();
User.prototype.x=10;// добовляем к конструктору данные
u1.x=20;
delete u1.x;

\*
User.prototype.say=function(w){ // Объекты добавляються через прототип
	console.log(this.name, ": ", w);
}

var u=new User("John", 25);
*/
// возвращает числа в масив
/*
function func(){
	return Array.prototype.slice.call(arguments);
}
func(1,2,3,4,5);
*/
/*
n=2// 
Number.prototype.pow= function(x){// можно перезаписать значения где огудноы
 return Math.pow(this.valueOf(), x);
};
n.pow(5)// 32
*/
/*
function User(name, age){
	this.name=name;
	this.age=age;
	this.admin=false;
}

for(var i in u){// таким образом нужно выводить.
	if (u.hasOwnProperty(i))
		print(i, ":", u[i]);
}
*/
 // [ ] instanceof Array;// проверяет пряму пренадлежность
 // Date обслуживает дату и время работает с мили секундами 3 последних знака
 // var d=new Date()// выдает текущее время
 //var d=new Date(1234567890000); // три последние цифры это милисекунды вызывает датукоторая былараньше
 //var d= new Date(2014,11)// год месяц дата часы минуты секунды мили секунды
 // январь это
  // d.getMonth()// вызивает текущий месяц
  // d.getDay()// вызывает номер дня воскресенье =0
// d.toDateString()// только дата
// d.toTimeString()// только время
/*
d=new Date();
d.setDate(10);// меняет только дату 
*/
/*try{
	var x=1, y=0;
	if(y==0)
		throw new Error("На 0 делить нельзя")
	console.log(x/y);
}
catch(e){
	console.log(e.name, e.message)
}
console.log("the and")
*/
/*
var err0=new Error("На ноль делить нельзя")
try{
	var x=1, y=0;
	if(y==0)
		throw err0;
	console.log(x/y);
}
catch(e){
	console.log(e.name, e.message)
}
console.log("the and")
37.31
*/