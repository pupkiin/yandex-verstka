
let currentIndex = 3;
const carouselItems = document.querySelectorAll('.galary__item');

function goToSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 3;
  } else if (index >= carouselItems.length) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector('.galary__list').style.transform = `translateX(-${currentIndex * 100}%)`;
}

buttonLeft = document.getElementById('members__button_left');
buttonRight = document.getElementById('members__button_right')

function goToNextSlide() {
  goToSlide(currentIndex + 3);
}

function goToPrevSlide() {
  goToSlide(currentIndex - 3);
}

buttonLeft.onclick = goToPrevSlide();
buttonRight.onclick = goToNextSlide();

setInterval(goToNextSlide, 3000); 