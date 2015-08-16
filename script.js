$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.slider').slider({
      full_width: true
  });
  $('.c-blurb-nav a').on('click', blurbEvents);
});

var blurbEvents = function(evt) {
  evt.preventDefault();

  var $this = $(this);
  $this
    .addClass('blue')
    .addClass('white-text')
    .removeClass('blue-text')
    .siblings()
    .removeClass('blue')
    .removeClass('white-text')
    .addClass('blue-text');

  $('.c-blurbs #' + $this.data('name'))
    .removeClass('hide')
    .siblings()
    .addClass('hide');
};
