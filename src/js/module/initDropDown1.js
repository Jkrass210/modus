export function initDropDown1() {
  if (window.innerWidth <= 1115) {
    document.querySelectorAll(".drop-down1").forEach((dropDown) => {
      const btn = dropDown.querySelector(".drop-down1__btn");
      const links = dropDown.querySelectorAll(".drop-down1__list .drop-down1__link");

      if (!btn) return;

      // Обработчик клика по кнопке
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        btn.classList.toggle("active");
      });

      // Обработчик клика по вложенным ссылкам
      links.forEach((link) => {
        link.addEventListener("click", function () {
          btn.classList.remove("active");
        });
      });
    });
  }
}