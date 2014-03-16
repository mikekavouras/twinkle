twinkle.js
=======

[demo](http://mikekavouras.com/twinkle)

## dependencies
jQuery (http://jquery.com/download/)
jQuery easing (http://gsgd.co.uk/sandbox/jquery/easing/)

## options

<table>
  <tr>
    <td>option</td>
    <td>description</td>
  </tr>
  <tr>
    <td><i>transition<i></td>
    <td>fade, crossfade, slide, swap<br>
    <strong>default: </strong>"fade"</td>
  </tr>
  <tr>
    <td><i>interval</i></td>
    <td>Amount of time (ms) in between each "twinkle"<br>
    <strong>default: </strong>2000</td>
  </tr>
  <tr>
    <td><i>transitionSpeed</i></td>
    <td>Total duration (ms) of "twinkle" <br> 
    <strong>default: </strong> 1000</td>
  </tr>
  <tr>
    <td><i>easingMethod</i></td>
    <td>
      Easing method for "twinkle" as found at http://gsgd.co.uk/sandbox/jquery/easing/ <br> 
      <strong>default: </strong>"easeOutQuint"
    </td>
  </tr>
  <tr>
    <td><i>hidden</i></td>
    <td>An array of image sources. This array is the set of images that are initially hidden<br>
      <strong>default: </strong>[ ]
    </td>
  </tr>
  <tr>
    <td><i>direction</i></td>
    <td>Direction for "slide" and "swap" transitions. If no direction is provided, twinkle.js will choose random directions.<br>
    <strong>default: </strong>none
    </td>
  </tr>
</table>

## example

#### basic

    $('#container').twinkle({
      hidden: [
        'path_to_image.jpg',
        'path_to_image.jpg'
      ]
    });
    
#### advanced

    $('#container').twinkle({
      transition: 'slide',
      interval: 3000,
      transitionSpeed: 2000,
      easingMethod: 'easeOutElastic',
      direction: 'left',
      hidden: [
        'path_to_image.jpg',
        'path_to_image.jpg'
      ]
    });

## Locking

If you want to "lock" an image in the grid, just give it's parent div a class of 'locked'. This particular image will always remain static. Feel free to apply this class to as many images as you please.
    
    <div class="locked">
      <img src="image_path.jpg">
    </div>
