// scroll-handler.js

var aboutBanner = document.querySelector('.about--banner');

if (aboutBanner) {
  var isDragging = false;
  var startY;
  var startScrollTop;

  aboutBanner.addEventListener('mousedown', function (event) {
    isDragging = true;
    startY = event.clientY;
    startScrollTop = aboutBanner.scrollTop;
  });

  window.addEventListener('mousemove', function (event) {
    if (isDragging) {
      var deltaY = event.clientY - startY;
      aboutBanner.scrollTop = startScrollTop - deltaY;
    }
  });

  window.addEventListener('mouseup', function () {
    isDragging = false;
  });
}
