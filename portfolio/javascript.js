// スライダー
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

    $(function(){
        $('a[href^="#"]').click(function(){
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
    });
      
// メニュークリックでメニュー閉じる
$('.draw-menu').click(function () {
    var $checkbox = $('input[type="checkbox"]');
    // チェックを外す
    $checkbox.removeAttr('checked').prop('checked', false).change();
      });
    // removeAttrでチェックを外す
    // propでIdなどの属性を取得する
    // attr()は、checkedの記述があるかどうかを確認する
// prop()は、checkedの状態（チェックされたかどうか）を確認する
// falseが返った場合、checkedを変更する

