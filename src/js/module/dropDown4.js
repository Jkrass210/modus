export function dropDown4 () {
  document.querySelectorAll(".drop-down4").forEach((dropdown) => {
    const btn = dropdown.querySelector(".drop-down4__btn");
    const list = dropdown.querySelector(".drop-down4__list");
    const textSpan = btn.querySelector(".text");

    // Функция для закрытия списка
    function closeDropdown() {
      btn.classList.remove("active");
    }

    // Открытие/закрытие списка при клике на кнопку
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      btn.classList.toggle("active");
    });

    // Закрытие при клике за пределами списка
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        closeDropdown();
      }
    });

    // Закрытие при нажатии ESC
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdown();
      }
    });

    // Выбор элемента списка и закрытие
    list.addEventListener("click", function (event) {
      if (event.target.classList.contains("drop-down4__item")) {
        textSpan.textContent = event.target.textContent;
        closeDropdown();
      }
    });
  });
}
