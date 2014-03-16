Array.prototype.remove = function(item) {
  if (this.indexOf(item) == -1) return;
  this.splice(this.indexOf(item), 1);
}

function TwinkleImageManager() {
  this.images = [];
  this.visible = [];
  this.hidden = [];
}

TwinkleImageManager.prototype = {
  hasImage: function(src) {
    for (var i = 0; i < this.images.length; i++) {
      if (src == this.images[i])
        return true;
    }
    return false;
  },
  addImage: function(src, fetched) {
    if (!this.hasImage(src)) {
      this.images.push(src);
      if (fetched) {
        this.hidden.push(src);
      }
    }
  },
  addImages: function(arr, fetched) {
    for (var i = 0; i < arr.length; i++) {
      this.addImage(arr[i], fetched);
    }
  },
  isVisible: function(src) {
    for (var i = 0; i < this.visible.length; i++) {
      if (src == this.visible[i])
        return true;
    }
    return false;
  },
  isHidden: function(src) {
    for (var i = 0; i < this.hidden.length; i++) {
      if (src == this.hidden[i])
        return true;
    }
    return false;
  },
  swap: function(visible, hidden) {
    this.visible.remove(visible);
    this.hidden.remove(hidden);
    this.visible.push(hidden);
    this.hidden.push(visible)
  }
};

(function() {
  $.fn.twinkle = function(options) {
    var opts = $.extend({}, $.fn.twinkle.defaults, options);

    return this.each(function() {
      var $elem = $(this);

      // make sure these things are overflow hidden for animation
      if (opts.transition == "swap" || opts.transition == "slide") {
        $elem.find('>*').css('overflow', 'hidden');
      }

      var imageManager = new TwinkleImageManager();

      imageManager.hidden = opts.hidden;
      $elem.find('img').each(function() {
        imageManager.addImage($(this).attr('src'));
      });

      imageManager.visible = imageManager.images; // set all initial images as visible

      setInterval(function() {
        $.fn.twinkle.twinkle($elem, opts, imageManager);
      }, opts.interval);
    });
  }

  $.fn.twinkle.defaults = {
    interval: 2000,
    transition: 'fade',
    transitionSpeed: 1000,
    easingMethod: 'easeOutQuint',
    hidden: [],
    direction: null
  };

  $.fn.twinkle.twinkle = function($elem, opts, imageManager) {
    if (imageManager.hidden.length == 0) {
      return; // we could do something like swap out twovisible images
    }

    var $visible = $elem.find('>*:visible').not('.locked');
    var r1 = Math.floor(Math.random() * $visible.length);
    var r2 = Math.floor(Math.random() * imageManager.hidden.length);
    var $v = $visible.eq(r1);
    var h = imageManager.hidden[r2];
    var $img = $v.find('img');
    var src = $img.attr('src');

    imageManager.swap(src, h); // set hidden image to visible and vice versa

    if (opts.transition == "fade") {
      $.fn.twinkle.fadeTransition($img, h, opts);
    } else if (opts.transition == "crossfade") {
      $.fn.twinkle.crossfadeTransition($img, h, opts);
    } else if (opts.transition == "slide") {
      $.fn.twinkle.slideTransition($img, h, opts);
    } else if (opts.transition == "swap") {
      $.fn.twinkle.slideTransition($img, h, opts, true);
    } else {
      alert("You're attempting to use an unsupported transition type");
    }
  }

  $.fn.twinkle.fadeTransition = function($img, src, opts) {
    $img.fadeOut(opts.transitionSpeed / 2, function() {
      $(this).attr('src', src).fadeIn(opts.transitionSpeed / 2);
    });
  }

  $.fn.twinkle.crossfadeTransition = function($img, src, opts) {
    var $otherImg = $('<img src="'+src+'">');
    $otherImg.hide().insertAfter($img);
    $otherImg.fadeIn(opts.transitionSpeed);
    $img.fadeOut(opts.transitionSpeed, function() {
      $(this).remove();
    });
  }

  $.fn.twinkle.slideTransition = function($img, src, opts, swap) {
    var anim = {};
    var dirs = ['left', 'right', 'top', 'bottom'];
    var dir = dirs[Math.floor(Math.random() * dirs.length)];
    dir = opts.direction || dir;
    var start = (dir == 'top' || dir == 'left') ? -100 : 100;
    var d = (dir == 'top' || dir == 'bottom') ? 'top' : 'left';
    anim[d] = swap ? start + 'px' : -start + 'px';

    var $otherImg = $('<img src="'+src+'">');
    $otherImg.insertAfter($img);

    $otherImg.css(d, start + 'px');
    $img.animate(anim, opts.transitionSpeed / 2, opts.easingMethod, function() {
      $(this).remove();
    });

    if (dir == "left" || dir == "right") {
      $otherImg.animate({ 'left' : '0px' }, opts.transitionSpeed / 2, opts.easingMethod);
    } else {
      $otherImg.animate({ 'top' : '0px' }, opts.transitionSpeed / 2, opts.easingMethod);
    }
  }

}(jQuery));
