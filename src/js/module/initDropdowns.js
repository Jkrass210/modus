export function initDropdowns(closeOnScroll = false, buttonClass, boxClass, listItemClass, inputClass) {
  document.querySelectorAll(buttonClass).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      
      const box = button.nextElementSibling;
      if (!box || !box.classList.contains(boxClass.replace('.', ''))) return;

      button.classList.toggle("active");

      document.querySelectorAll(buttonClass).forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
        }
      });
    });

    document.addEventListener("click", (event) => {
      const box = button.nextElementSibling;
      if (!button.contains(event.target) && (!box || !box.contains(event.target))) {
        button.classList.remove("active");
      }
      if (box && event.target.matches(listItemClass)) {
        const input = box.closest(".drop-down2").querySelector(inputClass);
        if (input) {
          input.value = event.target.textContent.trim();
          button.classList.remove("active");
        }
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(buttonClass).forEach((button) => {
        button.classList.remove("active");
      });
    }
  });

  if (closeOnScroll) {
    document.addEventListener("scroll", () => {
      document.querySelectorAll(buttonClass).forEach((button) => {
        button.classList.remove("active");
      });
    });
  }
}

