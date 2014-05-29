$(document).ready(function() {
  var hidden = [
    "images/yellow_orange.jpg",
  ];

  $('.fade').twinkle({
    hidden: hidden.slice(0)
  });

  $('.crossfade').twinkle({
    hidden: hidden.slice(0),
    transition: 'crossfade'
  });

  $('.slide').twinkle({
    hidden: hidden.slice(0),
    transition: 'slide',
    transitionSpeed: 1400
  });

  $('.swap').twinkle({
    hidden: hidden.slice(0),
    transition: 'swap'
  });

  $('.lockers').twinkle({
    hidden: hidden.slice(0)
  });
});
