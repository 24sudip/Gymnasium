$(function(){

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 50){
        $(".menu_bg").addClass("nav_bg")
    }else{
        $(".menu_bg").removeClass("nav_bg")
    }

    if(scrolling > 30){
        $(".back_to_top").fadeIn(500)
    }else{
        $(".back_to_top").fadeOut(500)
    }

  })

  $(".back_to_top").click(function(){
      $('html, body').animate({
          scrollTop:0
      }, 2000)
  })
    
    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows:false,
        dots:true
    });
    
    new VenoBox({
        selector: ".my-video-links"
    });    

    
$('.testimonial_main').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 575.99,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            arrows:false,
            dots:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            arrows:false,
            dots:true,
        }
      }
    ]
  });
                  

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $("#colorful").colorfulTab();
    
$('.market_main').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      arrows:true,
      prevArrow:".prev",
      nextArrow:".next",
      responsive: [
      {
        breakpoint: 575.99,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            arrows:false            
        }
      },  
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          arrows:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          arrows:false
        }
      }           
    ]
  });
                  
})
