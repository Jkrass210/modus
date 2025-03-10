export function navPoint() {
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-point__link");
    const sections = Array.from(links).map(link => document.querySelector(link.getAttribute("href")));

    function setActiveLink(targetLink) {
      links.forEach(link => link.classList.remove("active"));
      targetLink.classList.add("active");
    }

    // Клик по ссылке
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        //e.preventDefault();
        setActiveLink(this);
      });
    });

    // Отслеживание активного блока при скролле
    function updateActiveLinkOnScroll() {
      let scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop - 10; // небольшой отступ для точности
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(links[index]);
          }
        }
      });
    }

    window.addEventListener("scroll", updateActiveLinkOnScroll);
  });
}