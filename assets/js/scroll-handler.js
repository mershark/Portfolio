// scroll-handler.js

const aboutBanner = document.querySelector('.about--banner');

if (aboutBanner) {
  let isDragging = false;
  let startY;
  let startScrollTop;

  aboutBanner.addEventListener('mousedown', (event) => {
    isDragging = true;
    startY = event.clientY;
    startScrollTop = aboutBanner.scrollTop;
  });

  window.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const deltaY = event.clientY - startY;
      aboutBanner.scrollTop = startScrollTop - deltaY;
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });
}
