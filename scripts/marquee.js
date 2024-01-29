// header

var header__wrapper = document.querySelector('.header__marquee_wrapper'),
  header__marquee = document.querySelector('.header__marquee'),
  wrapperWidth = header__wrapper.offsetWidth,
  marqueeWidth = header__marquee.scrollWidth;

function moveHeader() {
  var currentTX = getComputedStyle(header__marquee).transform.split(',');
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }

  if (-currentTX >= marqueeWidth) {
    header__marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

  } else {
    header__marquee.style.transform = 'translateX(' + currentTX + 'px)';
  }
}

var interval = setInterval(moveHeader, 30);

// footer

var footer__wrapper = document.querySelector('.footer__marquee_wrapper'),
  footer__marquee = document.querySelector('.footer__marquee'),
  wrapperWidth = footer__wrapper.offsetWidth,
  marqueeWidth = footer__marquee.scrollWidth;

function moveFooter() {
  var currentTX = getComputedStyle(footer__marquee).transform.split(',');
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }

  if (-currentTX >= marqueeWidth) {
    footer__marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

  } else {
    footer__marquee.style.transform = 'translateX(' + currentTX + 'px)';
  }
}

var interval = setInterval(moveFooter, 30);