
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body, footer').stop().animate({
        scrollTop: target.offset().top
      }, 999); // Tempo de animação em milissegundos (1000 = 1 segundo)
    }
  })
})