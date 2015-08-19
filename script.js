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
    .addClass('blue-grey')
    .addClass('white-text')
    .removeClass('blue-grey-text')
    .siblings()
    .removeClass('blue-grey')
    .removeClass('white-text')
    .addClass('blue-grey-text');

  $('.c-blurbs #' + $this.data('name'))
    .removeClass('hide')
    .siblings()
    .addClass('hide');
};
