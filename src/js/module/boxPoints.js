export function boxPoints() {
  window.addEventListener("load", () => {
    const separators = document.querySelectorAll(".box-points__list li");

    console.log(separators)

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.5 }); // Анимация сработает, когда элемент наполовину виден

    separators.forEach(item => observer.observe(item));
  });
}