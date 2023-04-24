$(".burger").click(function () {
  $(this).toggleClass("burger-active");
});

$(".btn-send").click(function () {
  $(".btn-send-wrapper").addClass("active");
});
$(".btn-send-window .close, .btn-send-wrapper").click(function (event) {
  if (this === event.target) {
    $(".btn-send-wrapper").removeClass("active");
  }
});

// if ($("body").css("overflow") === "hidden") {
//   $("body").css("overflow", "");
// } else {
//   $("body").css("overflow", "hidden");
// }

$("#slider-items").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 40,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    760: {
      items: 4,
    },
  },
});
