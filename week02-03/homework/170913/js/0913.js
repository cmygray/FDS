$(document).ready(function() {
  var menu_span = $('span');
  var menu_li = $('ul li:first-child');
  var last_item = $('ul li:last-child a');
  var sub_menu = $('.submenu');
  var menu_bar = $('ul');

  // menu_span.hover(function() {
  //   $(this).parent().siblings().find('.sub-menu').toggleClass('visible');
  // });

  menu_bar.hover(function() {
    $(this).find('a').toggleClass('visible');
  })

  sub_menu.hover(function() {
    $(this).toggleClass('test');
  })

  menu_span.focusin(function() {
    $(this).parent().siblings().find('.sub-menu').addClass('visible');
  });

  last_item.focusout(function() {
    $(this).parents().find('.sub-menu').removeClass('visible');
  });

});