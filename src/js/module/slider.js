if (document.querySelector(".slide")) {
  // код для работы со слайдером
  let slides = document.querySelectorAll('.slide-single'); // получение коллекции слайдов
let slider = []; // инициализация массива
let slide = document.querySelector('.slide'); // получение всего блока слайдера

let slideBtnNext = document.querySelectorAll('.slide-btn-switch-next');
let slideBtnBack = document.querySelectorAll('.slide-btn-switch-back');


let imageSize = slide.offsetWidth;
for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i];
  slider[i].remove();
}
let step = 0; // переменная для контроля текущего слайда
let stageIndicator = 0;
let offset = 0; // переменная в которой хранится значение, на которое происходит смещение изображения
let timeInterval = 6000; // интервал смены авто смены слайдов

// функция сброса интервала, после нажатия кнопки пользователем
let autoSlideInterval = setInterval(left, timeInterval); // функция запускающая автоперелистывание слайдов
function resetInterval() {
  clearInterval(autoSlideInterval); // останавливаем текущий интервал
  autoSlideInterval = setInterval(left, timeInterval); // задаем новый интервал
}

// Функция отрисовки слайдов
function draw() {
  let slide = document.createElement('div'); 
  slide = slider[step];
  slide.style.left = offset * imageSize + 'px';
  document.querySelector('.slide').appendChild(slide);
  step = (step + 1 == slider.length) ? 0 : step + 1;
  offset = 1;
}
// Функция для перелистывания слайда
function left() {
  slide.onclick = null;

  stageIndicator = (stageIndicator + 1 == slider.length) ? 0 : stageIndicator + 1;
  let slides2 = document.querySelectorAll('.slide-single');
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * imageSize - imageSize + 'px';
    offset2++;
  }
  setTimeout(function () {
    slides2[0].remove();
    draw();
    slide.onclick = left;
  }, 1000);
  resetInterval();
  
  // обновляем индикаторы
  let stages = document.querySelectorAll('.slide-stage');
  stages.forEach((stage, index) => {
    if (index === stageIndicator) {
      stage.classList.add('slide-stage-active');
    } else {
      stage.classList.remove('slide-stage-active');
    }
  });
}

// событие, отслеживающее изменения экрана, и подгоняющая размер слайда под размер экрана.
window.addEventListener('resize', function () {
  imageSize = slide.offsetWidth;
  let slidesResize = document.querySelectorAll('.slide-single');
  slidesResize[1].style.left = imageSize + 'px';
  resetInterval();
});

// создаем индикаторы
slider.forEach(() => {
  let stage = document.createElement('div');
  stage.classList.add('slide-stage');
  document.querySelector('.slide-indicator').appendChild(stage);
});
// подсвечиваем первый индикатор
let stages = document.querySelectorAll('.slide-stage');
stages[0].classList.add('slide-stage-active');



draw();
draw();

slide.onclick = left;





}
