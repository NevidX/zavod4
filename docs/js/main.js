/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const burger = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\nconst scroll = __webpack_require__(/*! ./module/scroll.js */ \"./src/js/module/scroll.js\");\nconst slider = __webpack_require__(/*! ./module/slider.js */ \"./src/js/module/slider.js\");\nconst gallery = __webpack_require__(/*! ./module/gallery.js */ \"./src/js/module/gallery.js\");\n\n//# sourceURL=webpack://WorkDirectory/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function() {

eval("const burgerTrigger = document.querySelectorAll(\".burger__trigger\"); // Получаем триггер - кнопку \"бургер\" меню\nconst burgerBody = document.querySelectorAll(\".burger__body\"); // Получаем тело мобильного меню\nlet htmlBody = document.getElementsByTagName(\"body\"); // Получаем стандатрный элемент HTML - body для взаимодействия с ним\nlet subMenu = document.querySelectorAll(\".header__nav-sub-menu\") // Получаем подпункты в меню на случай, если они необходимы\nlet navItem = document.querySelectorAll(\".header__nav-item\") // Получаем все элементы меню - навигации\nconst style = \"active\"; // Занесем в переменную название стиля CSS для активного элемента\nconst contentWidth = \"100vh\"; // Переменная, которая содержит значение размера контента\n\n\n/* Через цикл устанавливаем слушатель событий, \n который при клике будет выставлять определенные стили для элементов меню, исходя из условий\n*/\nburgerTrigger.forEach((item, i) => {\n    burgerBody[i].style.height = \"0\"; // По умолчанию устанвливаем высоту мобильного меню 0\n    item.addEventListener(\"click\", () => {\n        if (!(style === \"none\")) { item.classList.toggle(style) };\n        /* Проверяем содержит ли burgerTrigger класс active, выставляем свойство\n        overflow для того, чтобы скрыть скрол всего документа в избежание формирования\n        двух скрол элементов.\n        */\n        item.classList.contains(\"active\")  \n            ? htmlBody[0].style.overflow = \"hidden\"\n            : htmlBody[0].style.overflowY = \"scroll\";\n        /* По нажатию происходит присваивание свойства height для тела мобильного меню\n        для того, что бы оно открылось на экране.\n        */\n        burgerBody[i].style.height === \"0px\"\n            ? burgerBody[i].style.height = contentWidth\n            : burgerBody[i].style.height = \"0\";\n    }); \n\n    /* Устанавливаем слушатель событий на окно браузера, \n    который отслеживает изменения экрана, в случае которого, он будет подгонять размеры\n    меню под размеры экрана пользователя.\n    */\n    window.addEventListener(\"resize\", () => {\n        let pageWidth = document.documentElement.scrollWidth; // Получаем текущую ширину страницы.\n        /* Если ширина страницы более 1000, т.е. это уже не мобильное устройтсво,\n        то скрываем меню путем присваиывание свойству height нулевой высоты.\n        */\n        if (pageWidth >= 1000) {\n            burgerBody[i].style.height = \"0\";\n            item.classList.remove(\"active\")\n        }\n        if (!(item.classList.contains(\"active\"))) htmlBody[0].style.overflowY = \"scroll\";\n\n    })\n});\n\n /* Слушатель событий для элементов меню nav-item.\n Необходим для того, чтобы открывать подпункты меню, если они необходимы.\n    */\nnavItem.forEach((nav) => {\n    nav.addEventListener(\"click\", (event) => {\n        let currentItem = event.target.nextElementSibling\n        if (typeof (currentItem) != 'undefined' && currentItem != null) { currentItem.classList.toggle(\"sub-menu-active\"); }\n    })\n})\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/gallery.js":
/*!**********************************!*\
  !*** ./src/js/module/gallery.js ***!
  \**********************************/
/***/ (function() {

eval("const galleryButtons = document.querySelectorAll(\"[data-gallery-button]\")\r\n\r\n\r\ngalleryButtons.forEach(button =>{\r\n    button.addEventListener(\"click\", () =>{\r\n        const galleryOffset = button.dataset.galleryButton === \"next\" ? 1 : -1\r\n        const gallerySlides = button.closest([\"[data-gallery]\"]).querySelector(\"[data-gallery-slides]\")\r\n        const activeGallerySlide = gallerySlides.querySelector(\"[data-active]\")\r\n        let newIndex = [...gallerySlides.children].indexOf(activeGallerySlide) + galleryOffset;\r\n        if(newIndex < 0 ) newIndex = gallerySlides.children.length - 1\r\n        if(newIndex >= gallerySlides.children.length) newIndex = 0\r\n\r\n        gallerySlides.children[newIndex].dataset.active = true;\r\n        delete activeGallerySlide.dataset.active\r\n    })\r\n})\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/gallery.js?");

/***/ }),

/***/ "./src/js/module/scroll.js":
/*!*********************************!*\
  !*** ./src/js/module/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("const smoothLinks = document.querySelectorAll('a[href^=\"#\"]');\nfor (let smoothLink of smoothLinks) {\n\tsmoothLink.addEventListener('click', function (e) {\n\t\te.preventDefault();\n\t\tconst id = smoothLink.getAttribute('href');\n\n\t\tdocument.querySelector(id).scrollIntoView({\n\t\t\tbehavior: 'smooth',\n\t\t\tblock: 'start'\n\t\t});\n\t});\n};\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/scroll.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/***/ (function() {

eval("if (document.querySelector(\".slide\")) {\r\n  // код для работы со слайдером\r\n  let slides = document.querySelectorAll('.slide-single'); // получение коллекции слайдов\r\nlet slider = []; // инициализация массива\r\nlet slide = document.querySelector('.slide'); // получение всего блока слайдера\r\n\r\nlet slideBtnNext = document.querySelectorAll('.slide-btn-switch-next');\r\nlet slideBtnBack = document.querySelectorAll('.slide-btn-switch-back');\r\n\r\n\r\nlet imageSize = slide.offsetWidth;\r\nfor (let i = 0; i < slides.length; i++) {\r\n  slider[i] = slides[i];\r\n  slider[i].remove();\r\n}\r\nlet step = 0; // переменная для контроля текущего слайда\r\nlet stageIndicator = 0;\r\nlet offset = 0; // переменная в которой хранится значение, на которое происходит смещение изображения\r\nlet timeInterval = 6000; // интервал смены авто смены слайдов\r\n\r\n// функция сброса интервала, после нажатия кнопки пользователем\r\nlet autoSlideInterval = setInterval(left, timeInterval); // функция запускающая автоперелистывание слайдов\r\nfunction resetInterval() {\r\n  clearInterval(autoSlideInterval); // останавливаем текущий интервал\r\n  autoSlideInterval = setInterval(left, timeInterval); // задаем новый интервал\r\n}\r\n\r\n// Функция отрисовки слайдов\r\nfunction draw() {\r\n  let slide = document.createElement('div'); \r\n  slide = slider[step];\r\n  slide.style.left = offset * imageSize + 'px';\r\n  document.querySelector('.slide').appendChild(slide);\r\n  step = (step + 1 == slider.length) ? 0 : step + 1;\r\n  offset = 1;\r\n}\r\n// Функция для перелистывания слайда\r\nfunction left() {\r\n  slide.onclick = null;\r\n\r\n  stageIndicator = (stageIndicator + 1 == slider.length) ? 0 : stageIndicator + 1;\r\n  let slides2 = document.querySelectorAll('.slide-single');\r\n  let offset2 = 0;\r\n  for (let i = 0; i < slides2.length; i++) {\r\n    slides2[i].style.left = offset2 * imageSize - imageSize + 'px';\r\n    offset2++;\r\n  }\r\n  setTimeout(function () {\r\n    slides2[0].remove();\r\n    draw();\r\n    slide.onclick = left;\r\n  }, 1000);\r\n  resetInterval();\r\n  \r\n  // обновляем индикаторы\r\n  let stages = document.querySelectorAll('.slide-stage');\r\n  stages.forEach((stage, index) => {\r\n    if (index === stageIndicator) {\r\n      stage.classList.add('slide-stage-active');\r\n    } else {\r\n      stage.classList.remove('slide-stage-active');\r\n    }\r\n  });\r\n}\r\n\r\n// событие, отслеживающее изменения экрана, и подгоняющая размер слайда под размер экрана.\r\nwindow.addEventListener('resize', function () {\r\n  imageSize = slide.offsetWidth;\r\n  let slidesResize = document.querySelectorAll('.slide-single');\r\n  slidesResize[1].style.left = imageSize + 'px';\r\n  resetInterval();\r\n});\r\n\r\n// создаем индикаторы\r\nslider.forEach(() => {\r\n  let stage = document.createElement('div');\r\n  stage.classList.add('slide-stage');\r\n  document.querySelector('.slide-indicator').appendChild(stage);\r\n});\r\n// подсвечиваем первый индикатор\r\nlet stages = document.querySelectorAll('.slide-stage');\r\nstages[0].classList.add('slide-stage-active');\r\n\r\n\r\n\r\ndraw();\r\ndraw();\r\n\r\nslide.onclick = left;\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;