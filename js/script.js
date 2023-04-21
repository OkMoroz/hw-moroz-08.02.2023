// $(".burger").click(function () {
//     console.log(this);
//     $(this).toggleClass("active")
//     $("header-link").slideToggle()
// })

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
