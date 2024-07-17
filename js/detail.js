const listNavItemElement = document.querySelectorAll(".product-tabs-nav-item");
const listTadElement = document.querySelectorAll(".tab");
let activeIndexTad = 0;

for (let navItemElement of listNavItemElement) {
  navItemElement.onclick = (e) => {
    for (let navItemElement of listNavItemElement) {
      navItemElement.classList.remove("product-tabs-nav-item-active");
    }
    for (let tadElement of listTadElement) {
      tadElement.classList.remove("show");
    }
    e.target.classList.add("product-tabs-nav-item-active");
    listTadElement[e.target.getAttribute("data-tab-index")].classList.add(
      "show"
    );
  };
}

////////////////////////
const inputQuantityElement = document.querySelector(
  ".top-right-quantity-input"
);

inputQuantityElement.oninput = (e) => {
  let value = e.target.value;
  if (!Number(value[value.length - 1])) {
    e.target.value = value.slice(0, value.length - 1);
  } else if (!Number(value[0])) {
    e.target.value = value.slice(1, value.length);
  }
};
const buttonIncrease = document.querySelector(
  ".top-right-quantity-button-increase"
);
const buttonReduce = document.querySelector(
  ".top-right-quantity-button-reduce"
);
buttonIncrease.onclick = () => {
  const value = Number(inputQuantityElement.value) + 1;
  if (value <= 999) inputQuantityElement.value = value;
};
buttonReduce.onclick = () => {
  const value = Number(inputQuantityElement.value) - 1;
  if (value > 0) inputQuantityElement.value = value;
};

// carousel

let activeIndexImage = 0;

const bigImageElement = document.querySelector(".top-left-wrap-big-img img");

const firstImageElement = document.querySelector(
  ".carousel-images .carousel-image:first-child"
);
const imagesElement = firstImageElement.parentElement;

const listImageElement = imagesElement.querySelectorAll("img");

const imageCount = imagesElement.childElementCount;

const prevBtnElement = document.querySelector(".carousel-btn-left");

const nextBtnElement = document.querySelector(".carousel-btn-right");

nextBtnElement.onclick = () => {
  if (activeIndexImage + 1 <= imageCount - 4) {
    activeIndexImage += 1;
    firstImageElement.style.marginLeft = `-${activeIndexImage * 25}%`;
    bigImageElement.src = listImageElement[activeIndexImage].src;
    for (let imageElement of listImageElement) {
      imageElement.classList.remove("active-img");
    }
    listImageElement[activeIndexImage].classList.add("active-img");
  }
};
prevBtnElement.onclick = () => {
  if (activeIndexImage - 1 >= 0) {
    activeIndexImage -= 1;
    firstImageElement.style.marginLeft = `-${activeIndexImage * 25}%`;
    bigImageElement.src = listImageElement[activeIndexImage].src;
    for (let imageElement of listImageElement) {
      imageElement.classList.remove("active-img");
    }
    listImageElement[activeIndexImage].classList.add("active-img");
  }
};

console.log({ imagesElement });
// const minMarginLeft = em
let isMouseDown = false;
let startX = 0;
let marginLeft = 0;
imagesElement.onmousedown = (e) => {
  isMouseDown = true;
  startX = e.clientX;
};
imagesElement.onmouseup = () => {
  isMouseDown = false;
  firstImageElement.style.transition = "margin-left 0.3s ease-in-out";
};
imagesElement.onmouseout = () => {
  isMouseDown = false;
  firstImageElement.style.transition = "margin-left 0.3s ease-in-out";
};
imagesElement.onmousemove = (e) => {
  if (isMouseDown) {
    marginLeft = marginLeft + (e.clientX - startX);
    firstImageElement.style.marginLeft = marginLeft + "px";
    firstImageElement.style.transition = "none";
    startX = e.clientX;
  }
};
