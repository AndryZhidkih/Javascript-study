// Modul 3
// Узлы каждый узел отдельный объект
/*
код типа
1)ELEMENT   <p>...</p>
2) ATTRIBUTE align="center"
3) TEXT это текст
*/
//parentNode обращение к родителю
// childNodes обращаеться к дочерним элем
//firstChild
//lastChild
//hasChildNodes() переводит в буль есть ли дети или нет
// getElementsByTagName(t) выбирает все узлы ниже лежащего
d.getElementsByTagName("p")// получаю все елементы p в нутри
d.parentNode// body
d.parentNode.getElementsByTagName("p");//все p body
document.getElementsByClassName// Обращение к классу не работает в ie8
            //корневой документ 
// он должен быть одним в html это html
document.documentElement// корневой элемент
// для того что бы выбрать bodu есть свойство
document.body// Выдает сразу боди
//         создание элементов
d=document.getElementsByClassName(d)// это div  с тремя параграфами
// я хочу создать новый параграф и вставить его туда
var p=document.createElement("p");//<p></p>
var t=document.createTextNode("Четвертый параграф")// єто оюїект
// теперь текст нужно вложить в p
p.appendChild(t);// p стал родителем t
d.appendChild(p);// Добавляет всегда в конец
// добавляем его перед кем то
var p2=document.getElementsByClassName("clickable");
d.insertBefor(p,p2);
// клон 
var clonedP=p.cloneNode(true)// что бы были дети по умолчанию false
// Удаление
var p2=d.removeChild(p2)// удаление с перезаписью
d.appendChild(p2)// добавляем удаленный параграф в конец
// замена однго на другой
var x=d.replaceChild(p2, clonedP)//обмен с сохранением удаленного
// контейнер для временых элементов
// Как добавить текст сразу во много div
document.createDocumentFragment()