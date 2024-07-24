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

// carousel

let activeIndexImage = 0;

let marginLeft = 0;

const bigImageElement = document.querySelector(".top-left-wrap-big-img img");

const firstImageElement = document.querySelector(
  ".carousel-images .carousel-image:first-child"
);
const imagesElement = firstImageElement.parentElement;

let widthImage = imagesElement.clientWidth * 0.25;

const listImageElement = imagesElement.querySelectorAll("img");

const imageCount = imagesElement.childElementCount;

const prevBtnElement = document.querySelector(".carousel-btn-left");

const nextBtnElement = document.querySelector(".carousel-btn-right");

nextBtnElement.onclick = () => {
  if (activeIndexImage + 1 <= imageCount - 1) {
    activeIndexImage += 1;
    handleChangeBigImage(activeIndexImage);
    if (marginLeft - widthImage >= -(widthImage * (imageCount - 4))) {
      marginLeft -= widthImage;
      firstImageElement.style.marginLeft = marginLeft + "px";
    }
  }
};
prevBtnElement.onclick = () => {
  if (activeIndexImage - 1 >= 0) {
    activeIndexImage -= 1;

    handleChangeBigImage(activeIndexImage);
    console.log(marginLeft, activeIndexImage, imagesElement.clientWidth);
    if (marginLeft + widthImage <= 0) {
      marginLeft += widthImage;
      firstImageElement.style.marginLeft = marginLeft + "px";
    }
  }
};
for (let i = 0; i < listImageElement.length; i++) {
  listImageElement[i].onclick = () => {
    activeIndexImage = i;
    handleChangeBigImage(activeIndexImage);
  };
}

const handleChangeBigImage = (index) => {
  for (let imageElement of listImageElement) {
    imageElement.classList.remove("active-img");
  }
  listImageElement[index].classList.add("active-img");
  bigImageElement.src = listImageElement[index].src;
};

let width = 0;

const widthImagesElement = imagesElement.clientWidth;

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
  handleChangeBigImage(activeIndexImage);
  width = 0;
};
imagesElement.onmouseout = () => {
  // isMouseDown = false;
  // firstImageElement.style.transition = "margin-left 0.3s ease-in-out";
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
