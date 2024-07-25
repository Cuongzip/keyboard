// const carouselImageElement = $(
//   ".carousel-images .carousel-images-item:first-child"
// );
// const carouselImagesElement = carouselImageElement.parentElement;
// let activeIndex = 1;

// const handleSlideAuto = () => {
//   carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
//   if (activeIndex == carouselImagesElement.childElementCount - 1) {
//     activeIndex = 0;
//   } else {
//     activeIndex++;
//   }
// };
// const time = 3000;

// let intervalId = setInterval(handleSlideAuto, time);

// const handleResetTimeSlide = () => {
//   clearInterval(intervalId);
//   intervalId = setInterval(handleSlideAuto, time);
// };

// const btnLeftElement = $(".carousel-btn-left");
// const btnRightElement = $(".carousel-btn-right");

// btnLeftElement.onclick = () => {
//   if (activeIndex === 0) {
//     activeIndex = carouselImagesElement.childElementCount - 1;
//   } else {
//     activeIndex -= 1;
//   }
//   carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
//   handleResetTimeSlide();
// };

// btnRightElement.onclick = () => {
//   if (activeIndex == carouselImagesElement.childElementCount - 1) {
//     activeIndex = 0;
//   } else {
//     activeIndex += 1;
//   }
//   carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
//   handleResetTimeSlide();
// };
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let activeIndex = 1;

const firstImageElement = $(".carousel-images .carousel-image:first-child");

const imagesElement = firstImageElement.parentElement;

const imageCount = imagesElement.childElementCount;

const imageCloneElement = imagesElement.querySelectorAll(
  ".carousel-image-clone"
);

const previousBtnElement = $(".carousel-btn-left");

const nextBtnElement = $(".carousel-btn-right");

const dotsElement = $(".carousel-dots");

////////////////////////////////
let dotsText = '<li class="carousel-dot active-dot"></li>';
for (let i = 1; i < imageCount - 2; i++) {
  dotsText += ' <li class="carousel-dot"></li>';
}
dotsElement.innerHTML = dotsText;

const listDots = dotsElement.querySelectorAll("li");

const handleActiveDot = () => {
  let index = activeIndex - 1;

  if (index < 0) {
    index = imageCount - 3;
  }
  if (index > listDots.length - 1) {
    index = 0;
  }
  dotsElement
    .querySelector(".carousel-dot.active-dot")
    .classList.remove("active-dot");
  listDots[index].classList.add("active-dot");
};

//////////////////////

const handleSlideAuto = () => {
  ++activeIndex;
  handleWhenChangeActiveIndex();
};
const durationInterval = 6000;
let intervalId = setInterval(handleSlideAuto, durationInterval);

const loadActiveImage = () => {
  firstImageElement.style.marginLeft = `-${activeIndex * 100}%`;
};

const handleWhenChangeActiveIndex = () => {
  handleActiveDot();
  loadActiveImage();
  // reset time interval
  clearInterval(intervalId);
  intervalId = setInterval(handleSlideAuto, durationInterval);
};
// events
Array.from(listDots).forEach((dotElement, index) => {
  dotElement.onclick = () => {
    activeIndex = index + 1;
    handleWhenChangeActiveIndex();
  };
});

firstImageElement.ontransitionend = () => {
  firstImageElement.style.transition = "none";
  if (activeIndex <= 0) {
    activeIndex = imageCount - 2;
    loadActiveImage();
  }
  if (activeIndex >= imageCount - 1) {
    activeIndex = 1;
    loadActiveImage();
  }
  setTimeout(() => {
    firstImageElement.style.transition = "all 0.4s ease-in-out";
  }, 0);
};

let prevBtnTimeoutId = null;
previousBtnElement.onclick = () => {
  if (!nextBtnTimeoutId) {
    --activeIndex;
    handleWhenChangeActiveIndex();
    nextBtnTimeoutId = setTimeout(() => {
      nextBtnTimeoutId = null;
    }, 400);
  }
};

let nextBtnTimeoutId = null;
nextBtnElement.onclick = () => {
  if (!nextBtnTimeoutId) {
    ++activeIndex;
    handleWhenChangeActiveIndex();
    nextBtnTimeoutId = setTimeout(() => {
      nextBtnTimeoutId = null;
    }, 400);
  }
};
