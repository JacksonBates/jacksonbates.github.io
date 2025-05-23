// Smooth scrolling script for navigation
$(document).ready(function () {
  $(".js-scroll-trigger").click(function (e) {
    var target = $(this).attr("href");
    if (target.startsWith("#")) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
        "easeInOutExpo"
      );

      // Close responsive menu when a scroll trigger link is clicked
      $(".navbar-collapse").collapse("hide");
    }
  });
});
