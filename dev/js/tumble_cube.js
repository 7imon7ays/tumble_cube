// $cube and $window defined in resize.js

(function() {

  if (isMobile()) {
    tumbleCubeMobile($cube);
    titlCubeMobile();
  } else {
    tumbleCubeDesktop($cube, $window);
    titlCubeDesktop();
  }

  tumbleNav();
}());

