// side bar

const modalElement = document.querySelector(".header-modal");

const sidebarElement = document.querySelector(".header-sidebar");

const iconCategoryElement = document.querySelector(".header-wrap-sidebar-icon");

const duration = 400;
const sidebarAnimate = sidebarElement.animate(
  [
    {
      right: "0",
    },
    {
      right: "-100%",
    },
  ],
  {
    duration,
    iterations: 1,
  }
);

iconCategoryElement.onclick = () => {
  modalElement.classList.add("header-modal-show");
};

modalElement.onclick = () => {
  sidebarAnimate.play();
  setTimeout(() => {
    modalElement.classList.remove("header-modal-show");
  }, duration - 3);
};

sidebarElement.onclick = (e) => {
  e.stopPropagation();
};

const listMenuItemElement = document.querySelectorAll(
  ".header-sidebar-menu-item-click"
);

for (let menuItem of listMenuItemElement) {
  menuItem.onclick = () => {
    const wrapSubMenuElement = menuItem.nextElementSibling;
    const subMenuElement = wrapSubMenuElement.querySelector("ul");

    if (wrapSubMenuElement.clientHeight) {
      wrapSubMenuElement.style.height = 0;
    } else {
      wrapSubMenuElement.style.height = subMenuElement.clientHeight + "px";
    }

    const iconElement = menuItem.querySelector(
      ".header-sidebar-menu-item-click-right"
    );
    iconElement.classList.toggle("rotate-90");
  };
}
