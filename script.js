
$(document).ready(function() {
  $(".hamburger").click(function() {
      $(".navbar-links").slideToggle("hide");

  });
  $('a[href=#top]').click(function () {
        $('body').animate({
                scrollTop: 0
        },
        50);
});
});
