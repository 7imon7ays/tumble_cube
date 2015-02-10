function tumbleNav () {
  var $navlist = $(".nav-list"),
      $flash = $(".flash");

  $window.on('mouseenter', moveDownNav);
  $navlist.on('mouseenter', flashScrollInfo);

  function moveUpNav () {
    $navlist.removeClass('window-edge')
            .addClass('window-bottom');

    $window.off("mousewheel touchmove", moveUpNav);
    $navlist.off('mouseenter', flashScrollInfo);
  }

  function moveDownNav () {
    $navlist.removeClass('window-bottom')
            .addClass('window-edge');

    $window.on("mousewheel touchmove", moveUpNav);
    $window.off('mouseenter', moveDownNav);
  }

  function flashScrollInfo () {
    $navlist.off('mouseenter', flashScrollInfo);
    $flash.fadeIn(400)
          .delay(400)
          .fadeOut(300);
  }
}
