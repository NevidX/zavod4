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

eval("const burgerTrigger = document.querySelectorAll(\".burger__trigger\");\nconst burgerBody = document.querySelectorAll(\".burger__body\");\nlet htmlBody = document.getElementsByTagName(\"body\");\nlet subMenu = document.querySelectorAll(\".header__nav-sub-menu\")\nlet navItem = document.querySelectorAll(\".header__nav-item\")\nconst style = \"active\";\nconst contentWidth = \"100vh\";\n\n\nburgerTrigger.forEach((item, i) => {\n    burgerBody[i].style.height = \"0\";\n    item.addEventListener(\"click\", () => {\n        if (!(style === \"none\")) { item.classList.toggle(style) };\n        item.classList.contains(\"active\")\n            ? htmlBody[0].style.overflow = \"hidden\"\n            : htmlBody[0].style.overflowY = \"scroll\";\n        burgerBody[i].style.height === \"0px\"\n            ? burgerBody[i].style.height = contentWidth\n            : burgerBody[i].style.height = \"0\";\n    });\n    window.addEventListener(\"resize\", () => {\n        let pageWidth = document.documentElement.scrollWidth;\n        if (pageWidth >= 1000) {\n            burgerBody[i].style.height = \"0\";\n            item.classList.remove(\"active\")\n        }\n        if (!(item.classList.contains(\"active\"))) htmlBody[0].style.overflowY = \"scroll\";\n\n    })\n});\nnavItem.forEach((nav) => {\n    nav.addEventListener(\"click\", (event) => {\n        let currentItem = event.target.nextElementSibling\n        if (typeof (currentItem) != 'undefined' && currentItem != null) { currentItem.classList.toggle(\"sub-menu-active\"); }\n    })\n})\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/gallery.js":
/*!**********************************!*\
  !*** ./src/js/module/gallery.js ***!
  \**********************************/
/***/ (function() {

eval("// // TODO:\r\n// // \r\n// // Прогресс бар сделать попробовать с анимацией на главном слайдере\r\n// // Посмотреть что со скриптом, ошибка на других страницах, нужно подключать только на той странице, где используется\r\n// // \r\n// if(window.location.pathname == \"/about.html\"){\r\n//     let gallerySlides = document.querySelectorAll('.slide-gallery') // Получение коллекции слайдов\r\n//     let galleryArray = []; // Иницилизация массива \r\n//     let galleryBtnPrev  = document.querySelectorAll('.gallery-btn-prev')\r\n//     let galleryBtnNext  = document.querySelectorAll('.gallery-btn-prev')\r\n//     let gallery = document.querySelector('.gallery'); // Получение всего блока слайдера\r\n//     let galleryImageSize = gallery.offsetWidth;\r\n//     console.log(gallerySlides);\r\n//     for(let i=0; i < gallerySlides.length; i++){\r\n//         galleryArray[i] = gallerySlides[i];\r\n//         galleryArray[i].remove();\r\n//     } \r\n//     let galleryStep = 0; // переменная для контроля текущего слайда\r\n//     let galleryOffset = 0; // переменная в которой хранится значение, на которое происходит смещение изображения\r\n    \r\n    \r\n//     // Функция сброса интервала, после нажатия кнопки пользователем.\r\n//     // function resetInterval(){\r\n//     //     clearInterval(autoSlideInterval); // останавливаем текущий интервал\r\n//     //     autoSlideInterval = setInterval(moveGalleryLeft, timeInterval); // задаем новый интервал\r\n//     // }\r\n    \r\n    \r\n//     // Функция отрисовки слайдов\r\n//     function drawGallery(){\r\n//         let gallerySlide = document.createElement('div') \r\n//         gallerySlide = galleryArray[galleryStep];\r\n//         gallerySlide.classList.add('slide-gallery');\r\n//         gallerySlide.style.left = galleryOffset*galleryImageSize + 'px';\r\n//         document.querySelector('.gallery').appendChild(gallerySlide);\r\n//         galleryStep = (galleryStep + 1 == galleryArray.length) ? 0 : galleryStep + 1;\r\n//         galleryOffset = 1;\r\n//     }\r\n    \r\n//     // Функция для перелистывания слайда\r\n//     function moveGalleryLeft() {\r\n//         gallery.onclick = null;\r\n        \r\n    \r\n//         let gallerySlides2 = document.querySelectorAll('.slide-gallery');\r\n//         let galleryOffset2 = 0;\r\n//         for(let i=0; i < gallerySlides2.length; i++){\r\n//             gallerySlides2[i].style.left = galleryOffset2*galleryImageSize - galleryImageSize + 'px';\r\n//             galleryOffset2++;\r\n//         }\r\n//         setTimeout(function(){\r\n//             gallerySlides2[0].remove();\r\n//             drawGallery(); \r\n//             gallery.onclick = moveGalleryLeft;\r\n//         },1000)\r\n        \r\n//         // resetInterval();\r\n    \r\n      \r\n        \r\n//     }\r\n\r\n    \r\n//     galleryBtnPrev.forEach(e => {\r\n//         e.addEventListener('click', function(){\r\n//             moveGalleryLeft();\r\n//             console.log('Клик на prev');\r\n//         })\r\n//     });\r\n    \r\n//     // Событие, отслеживающе изменения экрана, и подгоняющая размер слайда под размер экрана.\r\n//     window.addEventListener('resize', function(){\r\n//     galleryImageSize = gallery.offsetWidth;\r\n//     let slidesResize = document.querySelectorAll('.slide-gallery');\r\n//     slidesResize[1].style.left = galleryImageSize  + 'px';\r\n//     });\r\n    \r\n//     drawGallery(); \r\n//     drawGallery();  \r\n// //    galleryBtnPrev.onclick = moveGalleryLeft;\r\n    \r\n    \r\n    \r\n    \r\n    \r\n// }\r\n\r\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/gallery.js?");

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

eval("// TODO:\r\n// \r\n// Прогресс бар сделать попробовать с анимацией на главном слайдере\r\n// Посмотреть что со скриптом, ошибка на других страницах, нужно подключать только на той странице, где используется\r\n// \r\n\r\n    let slides = document.querySelectorAll('.slide-single') // Получение коллекции слайдов\r\n    let slider = []; // Иницилизация массива \r\n    let slide = document.querySelector('.slide'); // Получение всего блока слайдера\r\n    let imageSize = slide.offsetWidth;\r\n    for(let i=0; i < slides.length; i++){\r\n        slider[i] = slides[i];\r\n        slider[i].remove();\r\n    } \r\n    let step = 0; // переменная для контроля текущего слайда\r\n    let offset = 0; // переменная в которой хранится значение, на которое происходит смещение изображения\r\n    let timeInterval =  4000; // интервал смены авто смены слайдов\r\n    \r\n    \r\n    // Функция сброса интервала, после нажатия кнопки пользователем.\r\n    let autoSlideInterval = setInterval(left, timeInterval); // Функция запускающая автоперелистывание слайдов\r\n    function resetInterval(){\r\n        clearInterval(autoSlideInterval); // останавливаем текущий интервал\r\n        autoSlideInterval = setInterval(left, timeInterval); // задаем новый интервал\r\n    }\r\n    \r\n    \r\n    // Функция отрисовки слайдов\r\n    function draw(){\r\n        let slide = document.createElement('div') \r\n        slide = slider[step];\r\n        slide.classList.add('slide-single');\r\n        slide.style.left = offset*imageSize + 'px';\r\n        document.querySelector('.slide').appendChild(slide);\r\n        step = (step + 1 == slider.length) ? 0 : step + 1;\r\n        offset = 1;\r\n    }\r\n    \r\n    // Функция для перелистывания слайда\r\n    function left() {\r\n        slide.onclick = null;\r\n    \r\n    \r\n        let slides2 = document.querySelectorAll('.slide-single');\r\n        let offset2 = 0;\r\n        for(let i=0; i < slides2.length; i++){\r\n            slides2[i].style.left = offset2*imageSize - imageSize + 'px';\r\n            offset2++;\r\n        }\r\n        setTimeout(function(){\r\n            slides2[0].remove();\r\n            draw(); \r\n            slide.onclick = left;\r\n        },1000)\r\n        resetInterval();\r\n    \r\n      \r\n        \r\n    }\r\n    \r\n    // Событие, отслеживающе изменения экрана, и подгоняющая размер слайда под размер экрана.\r\n    window.addEventListener('resize', function(){\r\n    imageSize = slide.offsetWidth;\r\n    let slidesResize = document.querySelectorAll('.slide-single');\r\n    slidesResize[1].style.left = imageSize  + 'px';\r\n    resetInterval();\r\n    });\r\n    \r\n    draw(); \r\n    draw();  \r\n    slide.onclick = left;\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://WorkDirectory/./src/js/module/slider.js?");

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