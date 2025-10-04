$(function () {

  /* 헤더 */
  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });

  $('#headerWrap .depth01 li h2 a.btn').click(function () {
    if ($(this).parent().next().hasClass('active')) {
      $(this).removeClass('active')
      $(this).parent().next().removeClass('active');
    } else {
      $(this).addClass('active')
      $(this).parent().next().addClass('active');
    }
  });

  $('#headerWrap .mobileMenu').click(function () {
    $('#headerWrap .bg').fadeIn();
    $('#headerWrap .mobileMenuBox').animate({
      right: 0
    })
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $('#headerWrap .bg').fadeOut();
    $('#headerWrap .mobileMenuBox').animate({
      right: -3000
    })
  });

  $('#headerWrap .mobileDepth01 li h2 .btn').click(function () {

    if ($('.mobileDepth02').hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().next().removeClass('active');
      $(this).parent().next().slideUp();
    } else {
      $(this).addClass('active');
      $(this).parent().next().addClass('active');
      $(this).parent().next().slideDown();
    }

  });

});