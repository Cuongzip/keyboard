const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listNavItemElement = $$(".product-tabs-nav-item");
const listTadElement = $$(".tab");

for (let i = 0; i < listNavItemElement.length; i++) {
  listNavItemElement[i].onclick = () => {
    $(".product-tabs-nav-item-active").classList.remove(
      "product-tabs-nav-item-active"
    );
    $(".tab.show").classList.remove("show");
    listNavItemElement[i].classList.add("product-tabs-nav-item-active");
    listTadElement[i].classList.add("show");
  };
}

// carousel

let activeIndexImage = 0;

let marginLeft = 0;

const bigImageElement = $(".top-left-wrap-big-img img");

const firstImageElement = $(".carousel-images .carousel-image:first-child");

const imagesElement = firstImageElement.parentElement;

let widthImage = imagesElement.clientWidth * 0.25;

const listImagesElement = imagesElement.querySelectorAll("img");

const imageCount = imagesElement.childElementCount;

const prevBtnElement = $(".carousel-btn-left");

const nextBtnElement = $(".carousel-btn-right");

nextBtnElement.onclick = () => {
  if (activeIndexImage + 1 <= imageCount - 1) {
    activeIndexImage += 1;
    handleWhenChangeActiveIndex(activeIndexImage);
    if (marginLeft - widthImage >= -(widthImage * (imageCount - 4))) {
      marginLeft -= widthImage;
      firstImageElement.style.marginLeft = marginLeft + "px";
    }
  }
};
prevBtnElement.onclick = () => {
  if (activeIndexImage - 1 >= 0) {
    activeIndexImage -= 1;

    handleWhenChangeActiveIndex(activeIndexImage);

    if (marginLeft + widthImage <= 0) {
      marginLeft += widthImage;
      firstImageElement.style.marginLeft = marginLeft + "px";
    }
  }
};

for (let i = 0; i < listImagesElement.length; i++) {
  listImagesElement[i].onclick = () => {
    activeIndexImage = i;
    handleWhenChangeActiveIndex(activeIndexImage);
  };
}

const handleWhenChangeActiveIndex = (index) => {
  for (let imageElement of listImagesElement) {
    imageElement.classList.remove("active-img");
  }
  listImagesElement[index].classList.add("active-img");
  bigImageElement.src = listImagesElement[index].src;
};

let width = 0;

let isMouseDown = false;

let startX = 0;

imagesElement.onmousedown = (e) => {
  isMouseDown = true;
  startX = e.clientX;
};

document.onmouseup = () => {
  isMouseDown = false;
  firstImageElement.style.transition = "margin-left 0.3s ease-in-out";

  activeIndexImage += -Math.ceil(width / widthImage);

  marginLeft = Math.ceil(marginLeft / widthImage) * widthImage;

  if (marginLeft > 0) {
    marginLeft = 0;
    activeIndexImage = 0;
  } else if (marginLeft < -(widthImage * (imageCount - 4))) {
    marginLeft = -(widthImage * (imageCount - 4));
    activeIndexImage = imageCount - 1;
  }

  firstImageElement.style.marginLeft = marginLeft + "px";

  if (activeIndexImage < 0) {
    activeIndexImage = 0;
  } else if (activeIndexImage > imageCount - 1) {
    activeIndexImage = imageCount - 1;
  }
  handleWhenChangeActiveIndex(activeIndexImage);
  width = 0;
};

imagesElement.onmousemove = (e) => {
  if (isMouseDown) {
    width += e.clientX - startX;
    marginLeft = marginLeft + (e.clientX - startX);
    firstImageElement.style.marginLeft = marginLeft + "px";
    firstImageElement.style.transition = "none";
    startX = e.clientX;
  }
};

window.onresize = () => {
  let number = Math.ceil(marginLeft / widthImage);
  widthImage = imagesElement.clientWidth * 0.25;
  marginLeft = number * widthImage;
  firstImageElement.style.marginLeft = marginLeft + "px";
};

// quantity
import { handleQuantity } from "./components/index.js";
const quantityElement = $(".quantity");
handleQuantity(quantityElement);
