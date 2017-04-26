//Window
/*
	History// отвечает за ипосещеные страницы особо не используеться
	есть свойство history.length// количество посещенных страниц
	history.back()// метод возращающий назад предыдущую страницу
	history.forward()// на шаг вперед
	history.go(5)//число 5  в перед -5 пять назад
*/
 //Navigator// восномном служебная инфо он практически не  используеться
/*
 Screen // Монитор пользователя
 availHeight // монитор без панели задач
 availWidth//  монитор без панели задач
*/
/*
Location// объект// отвечает за адресную строку
http://www.site.ru:81/about/index.html?x=10
#metka// все что может быть в адреске
//может вернуть любую часть адреса
protocol:"http:"// возращает http в виде строки
hostname:"www.site.ru"// имя хоста возращает
port:"81"// возращает порт
host:"www.site.ru:81"// возращает хост нейм с портом
pathname:"/about/index.html"// начиная с слеша в право до вопроса или решотки
search:"?x=10"//;возврщает ?
hash:"#metka"//;возврщает#
href:"http://www.site.ru:81/about/index.html?x=10"// возвращает Location
                   // Методы Location 1.2 файл
location.reload(); //перезагрузка страницы true 
//контр ф5 принудительный перегруз
location.assign("http://ya.ru");// Загружают контент по адрусу
location.replace("http://ya.ru");//Загружают контент по адрусу
// разница реплейс заменяет историю ассай добавляет историю
*/
Document// основнйо объект 1.3
document.write// Можно дописать
document.open
/*
function demoWrite(){ // перезапись
			document.open();
			document.write("<html>");
			document.write("<h1>HELLO</h1>");
			document.write("/<html>");
			document.close();
		}
*/
 // Модальные окна 
 // методы окна
 //alert// выводит окно
 // confirm("Вы думаете?")// 
 // prompt("Вопрос,"Что то по умолчанию")
/*
var x=confirm("Вы думаете?")// выводит да или нет
alert(x); // Выводит вопрос
*/
// Методы 1,4
setTimeout// первый параметр второй через 1000(одну секунду)
/*
window.setTimeout("alert('setTimeout')", 1000);
*/
clearTimeout Отмена ссылки
setInterval// Исполняеться в заданый промежуток времени
clearInterval//Тоже самое что и предыдущее
/*
var timer;
		function foo(name){// Запускает через одну секунду функцию фуу
		alert(name)
		}

		function demoSetTimeout(){
			timer = window.setTimeout(function(){foo("Jon")}, 1000);
		}
		function demoClearTimeout(){
			window.clearTimeout(timer);
		}
/*
function User(name){
	this.name=name;
	this.say=function(){alert(this.name)};
}
var john=new User("John")
function demoSetTimeout(){
			timer = window.setTimeout(
			function(){john.say(); 
      },
			1000);
		}

		*/
		// открытие нового окна
		//1) open 5.1
		// 1.  url // загружает документ
		// 2.  name 
		 //1.2)close
		  // 1.2
		  // top, left открывает в нужном месте от экрана
		  // window.opener Ссылка на родительское окно

		  // Фрейм
frames[0];// Обращение по названию
frames['content'] // если есть name то по именю
frames.content// можнаи так