// $cube and $window defined in resize.js

(function() {

  if (isMobile()) {
    tumbleCubeMobile($cube);
  } else {
    tumbleCubeDesktop($cube, $window);
  }

  var offsetScroll = $.Event("mousewheel", {
    deltaX: -90, deltaY: -10, which: 1
  });

  $window.trigger(offsetScroll);
  tumbleNav();
}());

