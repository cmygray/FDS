$(document).ready(function() {
  var btn = $('.btn-menubar');
  var btn_menubar = $('.menubar, .btn-menubar');
  var menu = $('.main-menu');
  var last = $('.main-menu > li:last-child li:last-child a');

  btn_menubar.on('click', function() {
    menu.toggleClass('menu-active');

    if (menu.hasClass('menu-active')) {
      btn.text('메인메뉴 닫기');
    } else {
      btn.text('메인메뉴 열기');
    }
    $('.menubar-top').toggleClass('menubar-top-active');
    $('.menubar-middle').toggleClass('menubar-middle-active');
    $('.menubar-bottom').toggleClass('menubar-bottom-active');
  });
  $('video').on('focusin', function() {
    menu.removeClass('menu-active');
    $('.menubar-top').removeClass('menubar-top-active');
    $('.menubar-middle').removeClass('menubar-middle-active');
    $('.menubar-bottom').removeClass('menubar-bottom-active');
  });
});