$(function() {
    
$('.prodotti-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    arrows:true,
    prevArrow:".left",
    nextArrow:".right",
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3
          }
        },
        {
            breakpoint: 850,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
        {
          breakpoint: 530,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
  });
});