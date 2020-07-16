$(document).on(function() {
    var $toggleButton = $('.toggle-button');
    $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
    });
  });

$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
});



// (function(){
//   var logo = document.getElementById('logo-animate');
//   logo.onmouseover = function () {
//     $(logo).animate({opacity: 0}, 1000)
//     $(logoHover).animate({opacity: 1}, 1000);
    
//    }

//    logo.onmouseout = function () {
//     $(logo).animate({opacity: 1}, 1000);
//     $(logoHover).animate({opacity: 0}, 1000);
//    }
// })();


var logo = document.getElementById('logo-animate');
  logo.onmouseover = function() {
    let delay = 1000;

    function got () {
      logo.classList.toggle("logo-hide");
    }
    let animateLogo = setTimeout(got, delay);
  }