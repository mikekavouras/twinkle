$(document).ready(function() {
  var hidden = [
    "images/yellow_orange.jpg",
  ];

  $('.fade').twinkle({
    hidden: hidden.slice(0)
  });

  $('.crossfade').twinkle({
    hidden: hidden.slice(0),
    transition: 'crossfade',
    speed: 1200
  });

  $('.slide').twinkle({
    hidden: hidden.slice(0),
    transition: 'slide',
    speed: 1400
  });

  $('.swap').twinkle({
    hidden: hidden.slice(0),
    transition: 'swap',
    interval: 3000,
    speed: 2000
  });

  $('.lockers').twinkle({
    hidden: hidden.slice(0)
  });
});
