export function scroll() {
  const box = document.querySelector('.box-nav-become-partner');
  box.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start" // Прокручивает к началу блока
            });
        }
    });
  });
}
