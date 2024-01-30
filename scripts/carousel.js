let count = 3;
let countMin = 1;

let viewportWidth = document.documentElement.clientWidth;
console.log(viewportWidth);

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let width = listElems[0].offsetWidth;

let position = 0; // положение ленты прокрутки


if (viewportWidth >= 1000) {
  let elementSeen = document.getElementById('members__pages_left-top');

  buttonLeft = document.getElementById('members__button_left-top');
  buttonRight = document.getElementById('members__button_right-top')
  buttonLeft.setAttribute("disabled", "disabled");

  buttonLeft.onclick = function () {

    position += (width * count) + 40;
    list.style.marginLeft = position + 'px';

    if (position >= 0) {
      buttonLeft.setAttribute("disabled", "disabled");
      buttonRight.removeAttribute("disabled");
      elementSeen.textContent = '3';
    }
  };

  buttonRight.onclick = function () {
    if (position <= (width * 6) + (20 * 6)) {
      buttonLeft.removeAttribute("disabled");
      buttonRight.setAttribute("disabled", "disabled");
      elementSeen.textContent = '6';
    }

    position -= (width * count) + 40;
    list.style.marginLeft = position + 'px';
  };

  setInterval(() => {
    if (position >= 0) {
      buttonRight.onclick();
    } else if (position <= (width * 6) + (20 * 6)) {
      buttonLeft.onclick();
    }
  }, 4000); 
} else {
  let elementSeen = document.getElementById('members__pages_left-bottom');
  elementSeen.textContent = countMin;

  buttonLeft = document.getElementById('members__button_left-bottom');
  buttonRight = document.getElementById('members__button_right-bottom')
  buttonLeft.setAttribute("disabled", "disabled");

  buttonLeft.onclick = function () {
    if (countMin > 1) {
      buttonRight.removeAttribute("disabled");

      position += (width);
      list.style.marginLeft = position + 'px';

      countMin -= 1;
      elementSeen.textContent = `${countMin}`;

      if (countMin == 1) {
        buttonLeft.setAttribute("disabled", "disabled");
      }
    } else if (countMin == 1) {
      buttonLeft.setAttribute("disabled", "disabled");
    }
  };

  buttonRight.onclick = function () {
    if (countMin < 6) {
      buttonLeft.removeAttribute("disabled");
      countMin += 1;
      elementSeen.textContent = `${countMin}`;

      if (countMin == 6) {
        buttonRight.setAttribute("disabled", "disabled");
      }

      position -= (width);
      list.style.marginLeft = position + 'px';

    } else if (countMin == 6) {
      buttonLeft.removeAttribute("disabled");
    }
  };

  let back = false;
  setInterval(() => {
    if (countMin >= 1 && countMin != 6 && back == false) {
      buttonRight.onclick();
      if (countMin == 6) {
        back = true;
      }
    } else if (countMin <= 6 && countMin != 1 && back == true) {
      buttonLeft.onclick();
      if (countMin == 1) {
        back = false;
      }
    }
  }, 4000); 
}

