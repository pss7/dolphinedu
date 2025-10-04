$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });
  });

  //스크롤
  const $win = $(window);
  const $boxes = $('.textWrap .textBox');
  const $imgs = $('.imgWrap .imgBox');

  $imgs.removeClass('is-active').first().addClass('is-active');

  $win.on('scroll resize', function () {
    const mid = $win.scrollTop() + $win.height() / 2;
    let current = null;
    let best = Infinity;

    $boxes.each(function () {
      const $el = $(this);
      const top = $el.offset().top;
      const bottom = top + $el.outerHeight(true);
      const dist =
        (mid >= top && mid < bottom)
          ? 0
          : Math.min(Math.abs(mid - top), Math.abs(mid - bottom));

      if (dist < best) {
        best = dist;
        current = $el.data('img');
      }
    });

    if (current) {
      $imgs.removeClass('is-active');
      $('#' + current).addClass('is-active');
    }
  });


});
