$(document).ready(function() {
  var hidden = [
    "https://pbs.twimg.com/profile_images/420314816444502016/xj5TnUsx_bigger.jpeg",
    "https://pbs.twimg.com/profile_images/431418116011081728/O-fN_dvz_bigger.png",
    "https://pbs.twimg.com/profile_images/2930313036/df4cf3bbf1796ad7cf2ccfaf03c5d5f4_bigger.jpeg",
    "https://pbs.twimg.com/profile_images/378800000078193225/29b2f6095b0cd221514e683a9c7357fe_bigger.jpeg",
    "https://pbs.twimg.com/profile_images/417876580124221440/R_qv1vDm_bigger.jpeg",
    "https://pbs.twimg.com/profile_images/2745922214/a914b4566a7251b3df4ea87e0432e8d5_bigger.png",
    "https://pbs.twimg.com/profile_images/3468757441/563cf294407c44f0e6ce0e49ae031e34_bigger.jpeg"
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
});
