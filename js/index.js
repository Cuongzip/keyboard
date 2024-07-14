const carouselImageElement = document.querySelector(
  ".carousel-images .carousel-images-item:first-child"
);
const carouselImagesElement = carouselImageElement.parentElement;
let activeIndex = 1;

const handleSlide = () => {
  carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
  if (activeIndex == carouselImagesElement.childElementCount - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
};
const time = 3000;

let intervalId = setInterval(handleSlide, time);

const handleResetTimeSlide = () => {
  clearInterval(intervalId);
  intervalId = setInterval(handleSlide, time);
};

const btnLeftElement = document.querySelector(".carousel-btn-left");
const btnRightElement = document.querySelector(".carousel-btn-right");

btnLeftElement.onclick = () => {
  if (activeIndex === 0) {
    activeIndex = carouselImagesElement.childElementCount - 1;
  } else {
    activeIndex -= 1;
  }
  carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
  handleResetTimeSlide();
};

btnRightElement.onclick = () => {
  if (activeIndex == carouselImagesElement.childElementCount - 1) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
  carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
  handleResetTimeSlide();
};
