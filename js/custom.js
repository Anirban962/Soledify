$(document).ready(function() {
    $(".menu_btn").click(function() {
        $("body").toggleClass("addPnnl");
        $(".overlay").click(function() {
            $("body").removeClass("addPnnl");
        })
    });
    //   $('.dd_box a').on('click',function(event){
    //     var $anchor = $(this);
    //     $('html, body').animate({
    //       scrollTop: $($anchor.attr('href')).offset().top + "px"
    //     }, 1000);
    //     event.preventDefault();
    //  });

    if ($(window).width() < 992) {
        $(".d_down > a").click(function() {
            $('.dd_box').slideUp();
            $(".d_down > a").removeClass("up");
            if ($(this).parent(".d_down").find(".dd_box").css('display') == 'none') {
                $(this).parent(".d_down").find(".dd_box").slideDown();
                $(this).addClass("up");
            } else {
                $(this).parent(".d_down").find(".dd_box").slideUp();
                $(this).removeClass("up");
            }
        });
        $(".sub_menu > a").click(function() {
            $('.dd_menu').slideUp();
            $(".sub_menu > a").removeClass("up");
            if ($(this).parent(".sub_menu").find(".dd_menu").css('display') == 'none') {
                $(this).parent(".sub_menu").find(".dd_menu").slideDown();
                $(this).addClass("up");
            } else {
                $(this).parent(".sub_menu").find(".dd_menu").slideUp();
                $(this).removeClass("up");
            }
        });
        // $(".hdr_menu ul li a").click(function(){
        //   $('.hdr_menu ul li .dd_box').slideUp();
        //   $(this).removeClass("up");
        //   if ($(this).parent(".hdr_menu ul li").find(".dd_box").css('display') == 'none') {
        //       $(this).parent(".hdr_menu ul li").find(".dd_box").slideDown();
        //       $(this).addClass("up");
        //   }else{
        //     $(this).parent(".hdr_menu ul li").find(".dd_box").slideUp();
        //     $(this).removeClass("up");
        //   }
        // });
        // $(".d_down > a").click(function(){
        //   $('.d_down .dd_box').slideUp();
        //   $(this).removeClass("up");
        //   if ($(this).parent(".d_down").find(".dd_box").css('display') == 'none') {
        //       $(this).parent(".d_down").find(".dd_box").slideDown();
        //       $(this).addClass("up");
        //   }else{
        //     $(this).parent(".d_down").find(".dd_box").slideUp();
        //     $(this).removeClass("up");
        //   }
        // });
        // $(".sub_menu a").click(function(){
        //   $('.sub_menu .dd_menu').slideUp();
        //       $(".sub_menu a").removeClass("ss");
        //       if ($(this).parent(".sub_menu").find(".dd_menu").css('display') == 'none') {
        //           $(this).parent(".sub_menu").find(".dd_menu").slideDown();
        //           $(this).addClass("ss");
        //       }else{
        //           $(this).parent(".sub_menu").find(".dd_menu").slideUp();
        //           $(this).removeClass("ss");
        //       }
        //   })
    }
});

// $(document).on("scroll", function () {
//   if ($(document).scrollTop() > 80) {
//       $(".header_outer").addClass("shrink");
//   } else {
//       $(".header_outer").removeClass("shrink");
//   };
// });

// $(document).on("scroll", function () {
//   if ($(document).scrollTop() > 80) {
//       $(".header_sec").addClass("shrink");
//   } else {
//       $(".header_sec").removeClass("shrink");
//   };
// });

// $('.banner_slider').slick({
//   dots: false,
//   arrows: true,
//   infinite: false,
//   speed: 600,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   fade: true
// });

// AOS.init();


$('.slidr_cntnr').slick({
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});