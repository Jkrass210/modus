export function menu(){
  window.addEventListener("load", () => {
    const menu = document.querySelector("#headerNav");
    const menuList = document.querySelector(".header-nav__list");
    const moreItem = document.querySelector(".menu__more");
    const moreButton = document.querySelector(".menu__toggle");
    const hiddenMenu = document.querySelector(".menu__hidden");

    const checkMenuOverflow = () => {
      const isOverflowing = menuList.scrollWidth > menuList.offsetWidth;

      if (isOverflowing) {
        const menuItems = Array.from(menuList.children).filter(
          (item) => !item.classList.contains("menu__more")
        );

        for (let i = menuItems.length - 1; i >= 0; i--) {
          if (menuList.scrollWidth > menuList.offsetWidth) {
            hiddenMenu.prepend(menuItems[i]);
          } else {
            break;
          }
        }
        moreItem.classList.remove("hidden");
      } else {
        const hiddenItems = Array.from(hiddenMenu.children);

        for (let i = 0; i < hiddenItems.length; i++) {
          menuList.insertBefore(hiddenItems[i], moreItem);

          if (menuList.scrollWidth > menuList.offsetWidth) {
            hiddenMenu.prepend(hiddenItems[i]);
            break;
          }
        }
        if (hiddenMenu.children.length === 0) {
          moreItem.classList.add("hidden");
        }
      }
    };

    moreButton.addEventListener("click", () => {
      moreItem.classList.toggle("open");
    });

    // Проверка при изменении размера окна
    //window.addEventListener("resize", checkMenuOverflow);
          // Используем ResizeObserver для отслеживания изменений размеров меню
    const resizeObserver = new ResizeObserver(() => {
      checkMenuOverflow();
    });
    resizeObserver.observe(menu);
    setTimeout(checkMenuOverflow, 50);
  });
}