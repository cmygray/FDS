// factory function, live func > ready method
// onload 후 익명함수가 동작한다는 뜻
$(document).ready(function() {
  var menu = $('.main-menu > li');
  var span = $('.main-menu span');
  var last_item = $('.sub-menu li:last-child a');
  var notice_heading = $(`.notice-heading`);
  var pds_heading = $(`.pds-heading`);

  // main-menu > li:hover 시 익명함수가 동작
  menu.hover(function() {
    // this -binding--> li. 에서 find 메소드로 'sub-menu'를 찾고. toggleClass로 sub-menu-active 추가
    // 추가된 클래스는 css에서 찾아줌.
    $(this).find('.sub-menu').toggleClass('sub-menu-active');
  });

  // span에 포커스 진입했을 때 똑같이. 다만 포커스는 in, out을 모두 고려해야한다.
  span.focusin(function() {
    $(this).siblings('.sub-menu').addClass('sub-menu-active');
  });

  // focus out도 추가한다. -> 메인메뉴 리스트 포커스 기준.
  //   span.focusout(function() {
  //     $(this).siblings('.sub-menu').removeClass('sub-menu-active');
  //   });

  // last_item focusout 시 작동
  last_item.focusout(function() {
    $(this).parents('.sub-menu').removeClass('sub-menu-active');

  });

  var tab = $('.notice-heading, .pds-heading');

  // tab.click(function() {
  //   $(this).parent().addClass('board-active')
  //     .siblings().removeClass('board-active');
  // });

  // tab.focusin(function() {
  //   $(this).parent().addClass('board-active')
  //     .siblings().removeClass('board-active');
  // });

  //on은 멀티이벤트를 지원한다.
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-active').siblings().removeClass('board-active');
  })

  // my script
  // notice_heading.focusin(function() {
  //   $(this).parent().addClass(' board-active');
  // });

  // pds_heading.focusin(function() {
  //   $(this).parent().addClass(' board-active');
  //   $(this).parents('.notice board-active').removeClass(' board-active');
  // });
});