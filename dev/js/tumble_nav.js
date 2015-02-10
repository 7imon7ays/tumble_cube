function tumbleNav () {
  var $navlist = $(".nav-list");

  $navlist.removeClass('window-bottom')
          .addClass('window-edge');

  $window.on("mousewheel touchmove", moveUpNav);

  function moveUpNav () {
    $navlist.removeClass('window-edge')
            .addClass('window-bottom');

    $window.off("mousewheel touchmove", moveUpNav);
  }
}
