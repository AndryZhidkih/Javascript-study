// объекты
 /*var user={};
 console.log (typeof user);// object
*/
/*var user={
 0:"a",
 1:"b",
 2:"c"
};
for(var i=0; i in user ; i++){
	console.log(i+": "+user[i]);
}
*/
/*var user={
 "x": "a",
 "y": "b",
 "z": "c"
};
for(var i in user){
	console.log(i+": "+user[i]);
}
*/


/*
function some(){
	console.log(this.age);
}
var user={     // объекты передаютсья по ссылке
	"name":"John",
	"age":25,
	"admin":true,
	say: function (word){
			console.log(word+ "from " + this.name);
			this.foo();
		},
		foo:some
};
user.say("Hello ");
*/
/*var x=user;
for(var i in user){
	console.log(i+": "+ x[i]);
}
*/
/*var o={
	param:10,
	method:function(){
		var self=this;// Что бы вызвать функцию test
		function test(){// мы присваиваем this значение self
			console.log(self.param);
		}
		test();
	}
};
o.method();
*/
/*function some(a,b){
	//console.log(this.name);
	//console.log(some.length);// вызывает количество параметров
	console.log( arguments.length);// служебный массив показывает количество всех параметров
	console.log(arguments[2]);// выбираем нужный параметр от нуля
};

var mike={
 name:"Mike"
};
//console.log(some.length);
some.call(mike, 10, 20, 30, 40);// call вызывает то что хочу
*/
// масив
/*var a=[10, "john", true];
console.log(a[0]);
console.log(a.length); показывает количество
console.log(a.length=2); // задаетколичество объектов в масиве
*/
/* var user=["a","b", "c"];
   user[5]="x";

  for(var i=0; i<user.length; i++);
	console.log(i+" "+i[user]);
	
	for(var i in user){ // выводить все данные масива
	console.log(i+" "+i[user]);
	}
	
*/
/*func.call(obj,p1,p2...pn)
func.apply(obj,[p1,p2...pn])// передача масива
*/
/*var a=[5,45,3,89,100]
Math.min.apply(Math, a);
*/
// Экспрешин
/*
(function(){
	//
})(); // вызывает функцию
()// это оператор групировки
*/
/*
function foo(){
	var a=[];
	for(var i=0; i<3; i++)
		(function(j){
		a.push(function(){console.log(j)});
	})(i);
		return a;
}
var x=foo();
x[0]();
x[1]();
x[2]();
*/ // экспрешин