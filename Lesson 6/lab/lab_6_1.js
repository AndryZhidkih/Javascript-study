  // 6.1
  /*
  function Book(title, price){
  this.title=title;
  this.price=price;
  this.pubYear=2008;
}

var x=new Book("Это", 250);
Book.prototype.show=function ShowBook(title, price){
  console.log(this.title+" "+this.price);
};
console.log(x.show());
*/
// Задача 6.2
/*

function getDate(str){
  var f= str.match( /^(\d{1,2})-(\d{1,2})-(\d{4}$)/);
  if(f)
  return new Date(f[3], f[2]-1, f[1]);
}
var  b = getDate("22-06-2015");
console.log(b.toString());
*/

function getDate(str){
  var f= str.match( /^(\d{1,2})-(\d{1,2})-(\d{4}$)/);
  if(!f)
    throw new Error("Неправильная дата!!!");
  return new Date(f[3], f[2]-1, f[1]);
}
try{
  var  b = getDate("220-06-2015");
console.log(b.toString());
}catch(e){
  console.log(e.message);
}

