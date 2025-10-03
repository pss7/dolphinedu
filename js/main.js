$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });
  });


  //후기 영상
  $("#section01 .slick").slick({
    autoplay: true,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    centerMode: false,
    speed: 1500,
  });

});
