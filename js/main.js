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
