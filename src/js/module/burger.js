const burgerTrigger = document.querySelectorAll(".burger__trigger"); // Получаем триггер - кнопку "бургер" меню
const burgerBody = document.querySelectorAll(".burger__body"); // Получаем тело мобильного меню
let htmlBody = document.getElementsByTagName("body"); // Получаем стандатрный элемент HTML - body для взаимодействия с ним
let subMenu = document.querySelectorAll(".header__nav-sub-menu") // Получаем подпункты в меню на случай, если они необходимы
let navItem = document.querySelectorAll(".header__nav-item") // Получаем все элементы меню - навигации
const style = "active"; // Занесем в переменную название стиля CSS для активного элемента
const contentWidth = "100vh"; // Переменная, которая содержит значение размера контента


/* Через цикл устанавливаем слушатель событий, 
 который при клике будет выставлять определенные стили для элементов меню, исходя из условий
*/
burgerTrigger.forEach((item, i) => {
    burgerBody[i].style.height = "0"; // По умолчанию устанвливаем высоту мобильного меню 0
    item.addEventListener("click", () => {
        if (!(style === "none")) { item.classList.toggle(style) };
        /* Проверяем содержит ли burgerTrigger класс active, выставляем свойство
        overflow для того, чтобы скрыть скрол всего документа в избежание формирования
        двух скрол элементов.
        */
        item.classList.contains("active")  
            ? htmlBody[0].style.overflow = "hidden"
            : htmlBody[0].style.overflowY = "scroll";
        /* По нажатию происходит присваивание свойства height для тела мобильного меню
        для того, что бы оно открылось на экране.
        */
        burgerBody[i].style.height === "0px"
            ? burgerBody[i].style.height = contentWidth
            : burgerBody[i].style.height = "0";
    }); 

    /* Устанавливаем слушатель событий на окно браузера, 
    который отслеживает изменения экрана, в случае которого, он будет подгонять размеры
    меню под размеры экрана пользователя.
    */
    window.addEventListener("resize", () => {
        let pageWidth = document.documentElement.scrollWidth; // Получаем текущую ширину страницы.
        /* Если ширина страницы более 1000, т.е. это уже не мобильное устройтсво,
        то скрываем меню путем присваиывание свойству height нулевой высоты.
        */
        if (pageWidth >= 1000) {
            burgerBody[i].style.height = "0";
            item.classList.remove("active")
        }
        if (!(item.classList.contains("active"))) htmlBody[0].style.overflowY = "scroll";

    })
});

 /* Слушатель событий для элементов меню nav-item.
 Необходим для того, чтобы открывать подпункты меню, если они необходимы.
    */
navItem.forEach((nav) => {
    nav.addEventListener("click", (event) => {
        let currentItem = event.target.nextElementSibling
        if (typeof (currentItem) != 'undefined' && currentItem != null) { currentItem.classList.toggle("sub-menu-active"); }
    })
})
