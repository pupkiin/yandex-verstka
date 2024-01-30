let countStages = 1;

let carouselStages = document.getElementById('stages__carousel');
let listStages = carouselStages.querySelector('ul');
let listElemsStages = carouselStages.querySelectorAll('li');
let widthStages = listElemsStages[0].offsetWidth;

let positionStages = 0; // положение ленты прокрутки

let listOfPages = document.querySelectorAll('.stages__pages_block circle');
listOfPages[0].style.fill = 'rgb(49, 49, 49)';


buttonLeftStages = document.getElementById('stages__button_left');
buttonRightStages = document.getElementById('stages__button_right');
buttonLeftStages.setAttribute("disabled", "disabled");

buttonLeftStages.onclick = function () {
  if (countStages > 1) {
    buttonRightStages.removeAttribute("disabled");

    positionStages += (widthStages);
    listStages.style.marginLeft = positionStages + 'px';
    listOfPages[countStages - 1].style.fill = 'rgb(217, 217, 217)';
    countStages -= 1;
    listOfPages[countStages - 1].style.fill = 'rgb(49, 49, 49)';

    if (countStages == 1) {
      buttonLeftStages.setAttribute("disabled", "disabled");
    }
  } else if (countStages == 1) {
    buttonLeftStages.setAttribute("disabled", "disabled");
  }
};

buttonRightStages.onclick = function () {
  if (countStages < 5) {
    buttonLeftStages.removeAttribute("disabled");
    listOfPages[countStages - 1].style.fill = 'rgb(217, 217, 217)';
    countStages += 1;
    listOfPages[countStages - 1].style.fill = 'rgb(49, 49, 49)';


    if (countStages == 5) {
      buttonRightStages.setAttribute("disabled", "disabled");
    }

    positionStages -= (widthStages);
    listStages.style.marginLeft = positionStages + 'px';

  } else if (countStages == 5) {
    buttonLeftStages.removeAttribute("disabled");
  }
};