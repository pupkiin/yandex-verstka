let count = 3;

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let width = listElems[0].offsetWidth;


let position = 0; // положение ленты прокрутки

buttonLeft = document.getElementById('members__button_left');
buttonRight = document.getElementById('members__button_right')
buttonLeft.setAttribute("disabled", "disabled");

buttonLeft.onclick = function () {
  
  position += (width * count) + 60;
  list.style.marginLeft = position + 'px';

  if (position >= 0) {
    buttonLeft.setAttribute("disabled", "disabled");
    buttonRight.removeAttribute("disabled");
  }
};

buttonRight.onclick = function () {
  if (position <= (width * 6) + (20 * 6)) {
    buttonLeft.removeAttribute("disabled");
    buttonRight.setAttribute("disabled", "disabled");
  }
  
  position -= (width * count) + 60;
  list.style.marginLeft = position + 'px';
};

setInterval(() => {
  if (position >= 0) {
    buttonRight.onclick();
  } else if (position <= (width * 6) + (20 * 6)) {
    buttonLeft.onclick();
  }
}, 4000); 