export function dropDown3() {
  document.querySelectorAll(".drop-down3").forEach((dropdown) => {
    const button = dropdown.querySelector(".drop-down3__btn");
    const descBox = dropdown.querySelector(".drop-down3__box-desc");
  
    if (button && descBox) {
      descBox.style.width = `${button.offsetWidth}px`;
    }
  });
}