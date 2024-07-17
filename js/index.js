// const carouselImageElement = document.querySelector(
//   ".carousel-images .carousel-images-item:first-child"
// );
// const carouselImagesElement = carouselImageElement.parentElement;
// let activeIndex = 1;

// const handleSlide = () => {
//   carouselImageElement.style.marginLeft = `-${activeIndex}00%`;
//   if (activeIndex == carouselImagesElement.childElementCount - 1) {
//     activeIndex = 0;
//   } else {
//     activeIndex++;
//   }
// };
// const time = 3000;

// let intervalId = setInterval(handleSlide, time);

// const handleResetTimeSlide = () => {
//   clearInterval(intervalId);
//   intervalId = setInterval(handleSlide, time);
// };

// const btnLeftElement = document.querySelector(".carousel-btn-left");
// const btnRightElement = document.querySelector(".carousel-btn-right");

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

let activeIndex = 1;

const imagesFirstChildElement = document.querySelector(
  ".carousel-images .carousel-image:first-child"
);

const imagesElement = imagesFirstChildElement.parentElement;

const imageCount = imagesElement.childElementCount;

const imageCloneElement = imagesElement.querySelectorAll(
  ".carousel-image-clone"
);
////////////////////////////////
const dotsElement = document.querySelector(".carousel-dots");
let dotsText = "";
for (let i = 0; i < imageCount - 2; i++) {
  dotsText += ' <li class="carousel-dot"></li>';
}
dotsElement.innerHTML = dotsText;
const listDots = dotsElement.querySelectorAll("li");

const handleActiveDot = (activeIndexDot) => {
  const index = activeIndexDot || activeIndex;
  for (let dotElement of listDots) {
    dotElement.classList.remove("active-dot");
  }
  listDots[index - 1].classList.add("active-dot");
};
handleActiveDot();
//////////////////////

const handleSlide = () => {
  activeIndex++;
  if (activeIndex >= imageCount - 1) {
    setTimeout(() => {
      imagesFirstChildElement.style.transition = "none";
      activeIndex = 1;
      imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
    }, 400);
    handleActiveDot(1);
  } else {
    handleActiveDot();
  }
  imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
  imagesFirstChildElement.style.transition = "all 0.4s ease-in-out";
};
let intervalId = setInterval(handleSlide, 5000);

const previousBtnElement = document.querySelector(".carousel-btn-left");

const nextBtnElement = document.querySelector(".carousel-btn-right");

// const handleSlide = (action, activeIndex) => {
//   // if (!timeoutId) {
//   activeIndex += action;
//   if (activeIndex <= 0) {
//     setTimeout(() => {
//       imagesFirstChildElement.style.transition = "none";
//       activeIndex = action == -1 ? 0 : imageCount - 2;
//       imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
//     }, 400);
//     handleActiveDot(action == -1 ? 0 : imageCount - 2);
//   } else {
//     handleActiveDot(activeIndex);
//   }
//   imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
//   imagesFirstChildElement.style.transition = "all 0.4s ease-in-out";
//   //   timeoutId = setTimeout(() => {
//   //     timeoutId = null;
//   //   }, 400);
//   // }
// };
let prevBtnTimeoutId = null;
previousBtnElement.onclick = () => {
  if (!prevBtnTimeoutId) {
    if (--activeIndex <= 0) {
      setTimeout(() => {
        imagesFirstChildElement.style.transition = "none";
        activeIndex = imageCount - 2;
        imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
      }, 400);
      handleActiveDot(imageCount - 2);
      handleResetTimeInterval();
    } else {
      handleActiveDot();
      handleResetTimeInterval();
    }
    imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
    imagesFirstChildElement.style.transition = "all 0.4s ease-in-out";
    prevBtnTimeoutId = setTimeout(() => {
      prevBtnTimeoutId = null;
    }, 400);
  }
};
let nextBtnTimeoutId = null;
nextBtnElement.onclick = () => {
  if (!nextBtnTimeoutId) {
    if (++activeIndex >= imageCount - 1) {
      setTimeout(() => {
        imagesFirstChildElement.style.transition = "none";
        activeIndex = 1;
        imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
      }, 400);
      handleActiveDot(1);
      handleResetTimeInterval();
    } else {
      handleActiveDot();
      handleResetTimeInterval();
    }
    imagesFirstChildElement.style.marginLeft = `-${activeIndex * 100}%`;
    imagesFirstChildElement.style.transition = "all 0.4s ease-in-out";
    nextBtnTimeoutId = setTimeout(() => {
      nextBtnTimeoutId = null;
    }, 400);
  }
};
////////////////////////
const handleResetTimeInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(handleSlide, 5000);
};
