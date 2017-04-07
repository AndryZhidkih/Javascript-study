/*for (var i=0; i<10; i++){
	if(  i== 0) четыне нечетные числа
		console.log(i+"- zero");
	else if(i%2==0 )
		console.log(i+"-even");
	else
		console.log(i+ "-odd");
};
*/
/*var x=1, y;
if(x==1)
 	y="One";
else
	y="Zero";
	*/
	//тоже самое только сокращенно
	/*
	y=(х==1) ? "One": "Zero";
	*/
	// Управление циклом
	/*for(var i=322; i<600; i++){// вывести все числа которые деляться на 3 бех остатка
		if(i % 3 !=0)
			continue;// прерывание итерации
		console.log(i);
		//break;//Прерывает цикл
}
*/
// Очень редкая штука метки
// metka: Metka это любое слово 
// break metka преривает все циклы с меткой
//поверка одного значения
/*var x=20;
switch(x){//'то что нужно проверить' 
 	case 0: console.log("Zero");break;// в случае если там значение 0 то
  case 2: console.log("one");break;
  case 3: console.log("two");break;
  case 4: console.log("three");break;
  case 5: console.log("four");break;
  default:console.log(".."); // во всех остальных случаях
};
*/
// Задача вывести количество ворон с правильным окончание
var num=2000013;
var str="На ветке сидит "+num+" ворон";
var result="";
if(num%100>=11||num%100>=14){
}
  else if(num%10==1){
    result="а";
  }
  else if(num%10==2,3,4){
    result="ы";
}
console.log(str+result);
/*var num =2214;
var str="На ветке сидит "+num+" ворон";
var result="";
if(num%100<11 || num%100>14){
	switch(num%10){
		case 1: result= "a"; break;
		case 2:
		case 3:
		case 4: result= "ы"; break;
	}
}
console.log(str+result);
*/