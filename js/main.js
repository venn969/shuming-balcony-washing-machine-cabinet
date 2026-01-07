$(function() {
    var heroSlider = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.hero-slider .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.hero-slider .swiper-button-next',
            prevEl: '.hero-slider .swiper-button-prev'
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    var productSlider = new Swiper('.product-slider', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.product-slider .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.product-slider .swiper-button-next',
            prevEl: '.product-slider .swiper-button-prev'
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

    var caseSlider = new Swiper('.case-slider', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.case-slider .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.case-slider .swiper-button-next',
            prevEl: '.case-slider .swiper-button-prev'
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $("#mainNavbar").addClass("fixed-top shadow");
        } else {
            $("#mainNavbar").removeClass("fixed-top shadow");
        }
        
        if ($(this).scrollTop() > 300) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    $("#backToTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $(".filter-btn").click(function() {
        var type = $(this).data("type");
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        
        if (type === "all") {
            $(".product-item").show();
        } else {
            $(".product-item").hide();
            $(".product-item[data-type='" + type + "']").show();
        }
    });

    $("#contactForm").submit(function(e) {
        e.preventDefault();
        var name = $("#name").val().trim();
        var phone = $("#phone").val().trim();
        var message = $("#message").val().trim();
        
        if (!name) {
            alert("请输入您的姓名！");
            return false;
        }
        
        if (!phone) {
            alert("请输入您的联系电话！");
            return false;
        }
        
        var reg = /^1[3-9]\d{9}$/;
        if (!reg.test(phone)) {
            alert("请输入正确的手机号！");
            return false;
        }
        
        if (!message) {
            alert("请输入留言内容！");
            return false;
        }
        
        alert("留言成功，我们会尽快联系您！");
        $(this)[0].reset();
    });

    $("[data-bs-toggle='tooltip']").tooltip();
    
    $("[data-bs-toggle='popover']").popover();
});
