// side bar

const modalElement = document.querySelector(".header-modal");

const sidebarElement = document.querySelector(".header-sidebar");

const iconCategoryElement = document.querySelector(".header-wrap-sidebar-icon");

iconCategoryElement.onclick = () => {
  modalElement.classList.add("header-modal-show");
};
modalElement.onclick = () => {
  modalElement.classList.remove("header-modal-show");
};
sidebarElement.onclick = (e) => {
  e.stopPropagation();
};

const listMenuItemElement = document.querySelectorAll(
  ".header-sidebar-menu-item-click"
);

for (let menuItem of listMenuItemElement) {
  menuItem.onclick = () => {
    const subMenuElement = menuItem.nextElementSibling;

    const listIconElement = menuItem.querySelectorAll(
      ".header-sidebar-menu-item-click-right i"
    );

    subMenuElement.classList.toggle("show");

    listIconElement[0].classList.toggle("show");
    listIconElement[1].classList.toggle("show");
  };
}
// quantity
const inputQuantityElement = document.querySelector(".quantity-input");

inputQuantityElement.oninput = (e) => {
  let value = e.target.value;
  if (!Number(value[value.length - 1])) {
    e.target.value = value.slice(0, value.length - 1);
  } else if (!Number(value[0])) {
    e.target.value = value.slice(1, value.length);
  }
};
inputQuantityElement.onblur = (e) => {
  if (!e.target.value) e.target.value = "1";
};
const buttonIncrease = document.querySelector(".quantity-button-increase");
const buttonReduce = document.querySelector(".quantity-button-reduce");
buttonIncrease.onclick = () => {
  const value = Number(inputQuantityElement.value) + 1;
  if (value <= 999) inputQuantityElement.value = value;
};
buttonReduce.onclick = () => {
  const value = Number(inputQuantityElement.value) - 1;
  if (value > 0) inputQuantityElement.value = value;
};
