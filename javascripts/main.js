//navigation bar background changing when scroll
const navEL = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navEL.classList.add('navbar-scrolled')
    } else if (window.scrollY < 50) {
        navEL.classList.remove('navbar-scrolled');
    }
})

//smooth scrool between the sections when the related link is clicked
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 800);
        return false;
      }
    });
  });
  
