var swiperMain = new Swiper(".swiper-main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loop: "true",
});

var swiperRelation = new Swiper(".swiper-relations", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

var swiperClient = new Swiper(".swiper-client", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// messages in second slider
// relations with other companies one
let messages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

// document.getElementById("relation-message").innerHTML = messages[0];
swiperRelation.on("activeIndexChange", () => {
  document.getElementById("relation-message").innerHTML = messages[swiperRelation.activeIndex];
});

function increasingNumberStart(id, endNumber, step, speed, before, after, dec) {
  element = document.getElementById(id);
  increasingNumberAnimate(0, step, endNumber, element, speed, before, after, dec);
}

function increasingNumberAnimate(i, step, endNumber, element, speed, before, after, dec) {
  if (i <= endNumber) {
    element.innerHTML = before + i.toFixed(dec) + after;
    setTimeout(function () {
      increasingNumberAnimate(i + step, step, endNumber, element, speed, before, after, dec);
    }, speed);
  }
}

// TODO Add "15 years" animation as well
// BUG timing is off
increasingNumberStart("years", 15, 1, 32.666666666666664, "", " years", 0);
increasingNumberStart("ppl-count", 450, 1, 1.0888888888888888, "", "+", 0);
increasingNumberStart("office", 4, 1, 122.5, "", "", 0);
increasingNumberStart("projects", 550, 1, 0.8909090909090909, "", "+", 0);
increasingNumberStart("rating", 4.9, 0.1, 10, "", "", 1);