// modul 4
// События
boodmakets// Кнопки на панеле
onclick//Можно отменить
	/*
	function addHandler(el,ev,func){
		try{
		  div.addEventListener("click", foo, false);// событие без On, функция, false -обязательна
		  } catch(x){
		    div.attachEvent("onclick", foo)// IE
		  }
}
*/	//Заготовка для всех браузеров
el.addEventListener(click,foo)// Обращение к функции
el.detachEvent("onclick",foo)// Для IE
// как определить какой элемент приходит?
function foo(e){// в новых браузерах приходит в e ивент
	e=e||event;// Это для старых IE
	alert(e)
}
// щтмена bubble
e.stopPropagation();