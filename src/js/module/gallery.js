// // TODO:
// // 
// // Прогресс бар сделать попробовать с анимацией на главном слайдере
// // Посмотреть что со скриптом, ошибка на других страницах, нужно подключать только на той странице, где используется
// // 
// if(window.location.pathname == "/about.html"){
//     let gallerySlides = document.querySelectorAll('.slide-gallery') // Получение коллекции слайдов
//     let galleryArray = []; // Иницилизация массива 
//     let galleryBtnPrev  = document.querySelectorAll('.gallery-btn-prev')
//     let galleryBtnNext  = document.querySelectorAll('.gallery-btn-prev')
//     let gallery = document.querySelector('.gallery'); // Получение всего блока слайдера
//     let galleryImageSize = gallery.offsetWidth;
//     console.log(gallerySlides);
//     for(let i=0; i < gallerySlides.length; i++){
//         galleryArray[i] = gallerySlides[i];
//         galleryArray[i].remove();
//     } 
//     let galleryStep = 0; // переменная для контроля текущего слайда
//     let galleryOffset = 0; // переменная в которой хранится значение, на которое происходит смещение изображения
    
    
//     // Функция сброса интервала, после нажатия кнопки пользователем.
//     // function resetInterval(){
//     //     clearInterval(autoSlideInterval); // останавливаем текущий интервал
//     //     autoSlideInterval = setInterval(moveGalleryLeft, timeInterval); // задаем новый интервал
//     // }
    
    
//     // Функция отрисовки слайдов
//     function drawGallery(){
//         let gallerySlide = document.createElement('div') 
//         gallerySlide = galleryArray[galleryStep];
//         gallerySlide.classList.add('slide-gallery');
//         gallerySlide.style.left = galleryOffset*galleryImageSize + 'px';
//         document.querySelector('.gallery').appendChild(gallerySlide);
//         galleryStep = (galleryStep + 1 == galleryArray.length) ? 0 : galleryStep + 1;
//         galleryOffset = 1;
//     }
    
//     // Функция для перелистывания слайда
//     function moveGalleryLeft() {
//         gallery.onclick = null;
        
    
//         let gallerySlides2 = document.querySelectorAll('.slide-gallery');
//         let galleryOffset2 = 0;
//         for(let i=0; i < gallerySlides2.length; i++){
//             gallerySlides2[i].style.left = galleryOffset2*galleryImageSize - galleryImageSize + 'px';
//             galleryOffset2++;
//         }
//         setTimeout(function(){
//             gallerySlides2[0].remove();
//             drawGallery(); 
//             gallery.onclick = moveGalleryLeft;
//         },1000)
        
//         // resetInterval();
    
      
        
//     }

    
//     galleryBtnPrev.forEach(e => {
//         e.addEventListener('click', function(){
//             moveGalleryLeft();
//             console.log('Клик на prev');
//         })
//     });
    
//     // Событие, отслеживающе изменения экрана, и подгоняющая размер слайда под размер экрана.
//     window.addEventListener('resize', function(){
//     galleryImageSize = gallery.offsetWidth;
//     let slidesResize = document.querySelectorAll('.slide-gallery');
//     slidesResize[1].style.left = galleryImageSize  + 'px';
//     });
    
//     drawGallery(); 
//     drawGallery();  
// //    galleryBtnPrev.onclick = moveGalleryLeft;
    
    
    
    
    
// }

