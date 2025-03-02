/*export function counter() {
  const cards = document.querySelectorAll(".card10__numd"); // Карточки с числами
  const duration = 5000; // Время анимации в мс (2 секунды)

  let maxValues = Array.from(cards).map(card => parseInt(card.dataset.max, 10));
  let maxGlobal = Math.max(...maxValues); // Самое большое значение

  let startTime = null;

  function animateNumbers(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = (timestamp - startTime) / duration;

    if (progress > 1) progress = 1; // Ограничиваем прогресс 100%

    cards.forEach((card, index) => {
      let max = maxValues[index];
      let currentValue = Math.floor(max * progress); // Пропорциональное увеличение
      let counter = card.querySelector('.card10__counter');
      counter.textContent = currentValue;
    });

    if (progress < 1) {
      requestAnimationFrame(animateNumbers);
    }
  }

  requestAnimationFrame(animateNumbers);
}*/

export function counter() {
  const cards = document.querySelectorAll(".card10__numd"); // Карточки с числами
  const duration = 5000; // Время анимации в мс (5 секунд)
  const targetBlock = document.querySelector(".box-in-numbers__list");
  let animationStarted = false; // Флаг, чтобы не запускать анимацию несколько раз

  if (!cards.length || !targetBlock) return;

  let maxValues = Array.from(cards).map(card => parseInt(card.dataset.max, 10));
  let startTime = null;

  function animateNumbers(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = (timestamp - startTime) / duration;

    if (progress > 1) progress = 1; // Ограничиваем прогресс 100%

    cards.forEach((card, index) => {
      let max = maxValues[index];
      let currentValue = Math.floor(max * progress); // Пропорциональное увеличение
      let counter = card.querySelector('.card10__counter');
      counter.textContent = currentValue;
    });

    if (progress < 1) {
      requestAnimationFrame(animateNumbers);
    }
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !animationStarted) {
        animationStarted = true; // Фиксируем запуск анимации
        requestAnimationFrame(animateNumbers);
        observer.unobserve(targetBlock); // Отключаем наблюдение после старта
      }
    });
  }, { threshold: 0.5 });

  observer.observe(targetBlock);
}
