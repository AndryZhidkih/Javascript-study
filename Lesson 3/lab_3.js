/*function abs(num){
	if(num<0)
		return -num;
		return num;

		// retur(num<0) ? -num : num;// тоже самое что и сверху
}
console.log(abs(5));
console.log(abs(-5));

*/

/*function sum(n1, n2){
	return n1+n2;// возвращает код
}
 var result=sum(5,3);
 console.log(result);
 console.log(sum(2,4));
*/
/*function helloWorld(name, sign){// helloWorld это имя функции
	name=name|| "Guest" // значение по умолчанию если нету ничего Guest
	sign=sign|| "..."

 console.log("Hello, " +name+sign);
}
*/
/*helloWorld("John", "!");// Вызов функции
var n="Mike";
helloWorld(n);
helloWorld();
*/
/*var x="X";
var y="Y";

function outer(){// как выводятся значения
  var x="x";
  console.log("x: " +x);// x
  console.log("y: " +y);// Y
  y="y";
  function inner(z){
  	var y="_y";
  	console.log("x: " +x);//x
    console.log("y: " +y);//_y
    console.log("z: " +z);//z
  }
  inner("z");
}
outer();
console.log("x: " +x);//X
console.log("y: " +y);//Y
*/
/*var y=0;
function foo(x){
	if(x){
		y=1;
		console.log(y);
	}
	else{
		var y=2;
		console.log(y);
	}
}
foo(true);
*/
/*var x=function(){};
x();// это экспрешен и вывод нужно писать строго под ним
*/
/*function outer(){
	return	function (x){ 
		console.log(x2);
	};
}
var x=outer();
x("hello");
*/
/*function say(greet){
	 return function (name){
	 				return greet + " " +name;
	 };
}
 var en=say("Hello");
 console.log(en("John"));
 console.log(en("Mike"));

 var ru=say("Privet");
 console.log(ru("Vasay"));
 console.log(ru("Petay"));
*/
/*  for(var i=base; i<=count; i++)
  	action(i);
}
foo(5,10,console.log);
*/
// Рекурсия функция вызывающая саму себя
function power(base, exp){
	if(exp==0) return 1;
	return base *power(base, exp-1);
}