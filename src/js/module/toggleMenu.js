/*export function toggleMenu(buttonId, disableScroll = false) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const targetSelector = `[id-btn-open="${buttonId}"]`;
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const body = document.body;

  function toggleState() {
    const isActive = button.classList.toggle('active');
    target.classList.toggle('active', isActive);
    if (disableScroll) {
      body.classList.toggle('stop-scroll', isActive);
    }
  }

  function closeMenu(event) {
    if (
      !target.contains(event.target) &&
      !button.contains(event.target)
    ) {
      button.classList.remove('active');
      target.classList.remove('active');
      if (disableScroll) {
        body.classList.remove('stop-scroll');
      }
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', escClose);
    }
  }

  function escClose(event) {
    if (event.key === 'Escape') {
      button.classList.remove('active');
      target.classList.remove('active');
      if (disableScroll) {
        body.classList.remove('stop-scroll');
      }
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', escClose);
    }
  }

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleState();
    if (button.classList.contains('active')) {
      document.addEventListener('click', closeMenu);
      document.addEventListener('keydown', escClose);
    } else {
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', escClose);
    }
  });
}*/

export function toggleMenu(buttonId, disableScroll = false, extraClass = null) {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const targetSelector = `[id-btn-open="${buttonId}"]`;
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const body = document.body;
  const extraElement = extraClass ? document.querySelector(`.${extraClass}`) : null;

  function toggleState() {
    const isActive = button.classList.toggle('active');
    target.classList.toggle('active', isActive);
    if (extraElement) extraElement.classList.toggle('active', isActive);
    if (disableScroll) {
      body.classList.toggle('stop-scroll', isActive);
    }
  }

  function closeMenu(event) {
    if (
      !target.contains(event.target) &&
      !button.contains(event.target)
    ) {
      button.classList.remove('active');
      target.classList.remove('active');
      if (extraElement) extraElement.classList.remove('active');
      if (disableScroll) {
        body.classList.remove('stop-scroll');
      }
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', escClose);
    }
  }

  function escClose(event) {
    if (event.key === 'Escape') {
      button.classList.remove('active');
      target.classList.remove('active');
      if (extraElement) extraElement.classList.remove('active');
      if (disableScroll) {
        body.classList.remove('stop-scroll');
      }
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', escClose);
    }
  }

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleState();
    if (button.classList.contains('active')) {
      document.addEventListener('click', closeMenu);
      document.addEventListener('keydown', escClose);
    } else {
      document.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', escClose);
    }
  });
}

