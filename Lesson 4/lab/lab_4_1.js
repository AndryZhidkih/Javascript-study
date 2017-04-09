/*var book1={};
	book1.title="Пипец нама";
	book1.pubYear="2017";
	book1.price="200";
	
for( i in book1){
	console.log(i+ ":"+book1[i]);
}
/*
/*
var book2={
 "title": "Пипец",
 "pubYear": 2017,
 "price": 200
};
for(var i in book2){
	console.log(i+": "+book2[i]);
}
*/
 /* 
  var book1={};
	book1.title="Пипец нама";
	book1.pubYear=2017;
	book1.price= 200;
	book1.show=function(book){
		console.log(book+this.title+" "+this.price);	
	}
	book1.show("Это ");


function showBook(books){
 	 console.log(books+this.title+" "+this.price);
 }
 
var book2={
 "title": "Пипец",
 "pubYear": 2017,
 "price": 200,
  show:showBook
};
  book2.show("и это ")

*/
// Масивы
/*var a = [5, 12];// возведение числа в степень и записивание его в b
var b =[]; 
 a[99] = 7;

for(var i in a){
	b.push(Math.pow(a[i], 2))
	
}
*/
/*func.call(obj,p1,p2...pn)
func.apply(obj,[p1,p2...pn])// передача масива
*/
var a=[5,45,3,89,100]
Math.min.apply(Math, a);



