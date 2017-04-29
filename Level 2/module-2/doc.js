
// Колекции ссылок
document.links // показывает все ссылки как масив
document.linls[0]// Показывае первую ссылку и так далие
// Колекция images
document.images[0]// картинки
// Коелкция форм
document.forms[0]// Обращение по индексу
document.forms[name]// Обращение по имени
document.forms.name// Оюращение по имени

var f=document.forms[0];// Это объект
// Свойства и методы
f.action// Получаем action из формы его можно поменять
f.action="http://ya.ru"// Просто 
// Пробуем менять цвет
document.links[0];
document.links[0].style.color="red"// Поменяли цвет ссылки
// Если у стиля есть дефис, его нужно склеить
document.links[0].style.backgroundColor="red"
// Исключения(конфликты)
<label for>// что бы к нему обратиться нужно писать label.htmlFor
float// обращаемся style.cssFloat
class// обращаемся .className
                     // Формы
// html свойства
// скрипт свойства
f.submit()// отправляет форму
f.reset()// сброс
f.elements[1]// Обращаюсь к первому элементу формы input type text
f.elements.q// тоже самое
txt=f.elements.q;// Присваиваем текст 
txt.defaultValue// установка value по умолчанию
txt.form// ссылка на форму где находиться
//       Методы input
txt.bluer()// отмена выделения
txt.focus();
txt.select()// Выделяет
f.elements[5].click();// клик по элементу
// чекбоксы
x=f.elements.lang[0]// первый русский
x.checked=true// появиться флажок
x.defaultChecked// true либо false по умолчанию
//  img модуль 2
// table
