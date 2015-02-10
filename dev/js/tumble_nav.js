function tumbleNav () {
  var $navlist = $(".nav-list");

  $window.on('hover', moveDownNav);

  function moveUpNav () {
    $navlist.removeClass('window-edge')
            .addClass('window-bottom');

    $window.off("mousewheel touchmove", moveUpNav);
  }

  function moveDownNav () {
    $navlist.removeClass('window-bottom')
            .addClass('window-edge');

    $window.on("mousewheel touchmove", moveUpNav);
    $window.off('hover', moveDownNav);
  }
}
