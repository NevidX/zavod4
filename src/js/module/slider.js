// TODO:
// 
// Прогресс бар сделать попробовать с анимацией на главном слайдере
// Посмотреть что со скриптом, ошибка на других страницах, нужно подключать только на той странице, где используется
// 

    let slides = document.querySelectorAll('.slide-single') // Получение коллекции слайдов
    let slider = []; // Иницилизация массива 
    let slide = document.querySelector('.slide'); // Получение всего блока слайдера
    let imageSize = slide.offsetWidth;
    for(let i=0; i < slides.length; i++){
        slider[i] = slides[i];
        slider[i].remove();
    } 
    let step = 0; // переменная для контроля текущего слайда
    let offset = 0; // переменная в которой хранится значение, на которое происходит смещение изображения
    let timeInterval =  6000; // интервал смены авто смены слайдов
    
    
    // Функция сброса интервала, после нажатия кнопки пользователем.
    let autoSlideInterval = setInterval(left, timeInterval); // Функция запускающая автоперелистывание слайдов
    function resetInterval(){
        clearInterval(autoSlideInterval); // останавливаем текущий интервал
        autoSlideInterval = setInterval(left, timeInterval); // задаем новый интервал
    }
    
    
    // Функция отрисовки слайдов
    function draw(){
        let slide = document.createElement('div') 
        slide = slider[step];
        slide.classList.add('slide-single');
        slide.style.left = offset*imageSize + 'px';
        document.querySelector('.slide').appendChild(slide);
        step = (step + 1 == slider.length) ? 0 : step + 1;
        offset = 1;
    }
    
    // Функция для перелистывания слайда
    function left() {
        slide.onclick = null;
    
    
        let slides2 = document.querySelectorAll('.slide-single');
        let offset2 = 0;
        for(let i=0; i < slides2.length; i++){
            slides2[i].style.left = offset2*imageSize - imageSize + 'px';
            offset2++;
        }
        setTimeout(function(){
            slides2[0].remove();
            draw(); 
            slide.onclick = left;
        },1000)
        resetInterval();
    
      
        
    }
    
    // Событие, отслеживающе изменения экрана, и подгоняющая размер слайда под размер экрана.
    window.addEventListener('resize', function(){
    imageSize = slide.offsetWidth;
    let slidesResize = document.querySelectorAll('.slide-single');
    slidesResize[1].style.left = imageSize  + 'px';
    resetInterval();
    });
    
    draw(); 
    draw();  
    slide.onclick = left;
    






