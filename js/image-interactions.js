$(function() {
    var lazyLoadImages = function() {
        $("img.lazy").not(".swiper-slide img").each(function() {
            var $img = $(this);
            var threshold = 200;
            
            if ($img.offset().top < $(window).height() + $(window).scrollTop() + threshold) {
                var src = $img.data("src");
                if (src) {
                    $img.attr("src", src);
                    $img.removeAttr("data-src");
                    $img.removeClass("lazy");
                    $img.addClass("loaded");
                }
            }
        });
    };

    var loadSwiperImages = function() {
        $(".swiper-slide img.lazy").each(function() {
            var $img = $(this);
            var src = $img.data("src");
            if (src) {
                $img.attr("src", src);
                $img.removeAttr("data-src");
                $img.removeClass("lazy");
                $img.addClass("loaded");
            }
        });
    };

    lazyLoadImages();

    $(window).scroll(function() {
        lazyLoadImages();
    });

    $(window).on("load", function() {
        lazyLoadImages();
        loadSwiperImages();
        setTimeout(function() {
            lazyLoadImages();
        }, 500);
    });

    if ($(".product-gallery").length > 0) {
        var productGallery = new Swiper(".product-gallery", {
            loop: true,
            spaceBetween: 10,
            thumbs: {
                swiper: {
                    el: ".product-thumbs",
                    spaceBetween: 10,
                    slidesPerView: 4,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    }

    if ($(".case-gallery").length > 0) {
        var caseGallery = new Swiper(".case-gallery", {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    }

    $(document).on("click", ".img-zoom", function(e) {
        e.preventDefault();
        var src = $(this).attr("src") || $(this).data("src");
        var alt = $(this).attr("alt") || "";
        
        var modalHtml = `
            <div class="image-modal" id="imageModal">
                <div class="image-modal-content">
                    <span class="image-modal-close">&times;</span>
                    <img class="image-modal-img" src="${src}" alt="${alt}">
                    <div class="image-modal-caption">${alt}</div>
                </div>
            </div>
        `;
        
        $("body").append(modalHtml);
        $("#imageModal").fadeIn(300);
        $("body").css("overflow", "hidden");
    });

    $(document).on("click", ".image-modal-close", function() {
        $("#imageModal").fadeOut(300, function() {
            $(this).remove();
        });
        $("body").css("overflow", "auto");
    });

    $(document).on("click", "#imageModal", function(e) {
        if (e.target === this) {
            $(this).fadeOut(300, function() {
                $(this).remove();
            });
            $("body").css("overflow", "auto");
        }
    });

    $(document).on("keydown", function(e) {
        if (e.key === "Escape" && $("#imageModal").length > 0) {
            $("#imageModal").fadeOut(300, function() {
                $(this).remove();
            });
            $("body").css("overflow", "auto");
        }
    });

    $(".product-item, .case-item").hover(
        function() {
            $(this).find(".item-img").addClass("hover-effect");
            $(this).find(".item-overlay").fadeIn(200);
        },
        function() {
            $(this).find(".item-img").removeClass("hover-effect");
            $(this).find(".item-overlay").fadeOut(200);
        }
    );

    $(".filter-btn").click(function() {
        var type = $(this).data("type");
        var category = $(this).data("category");
        
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        
        if (type === "all" && category === "all") {
            $(".product-item, .case-item").fadeIn(300);
        } else if (type !== "all" && category === "all") {
            $(".product-item, .case-item").hide();
            $(".product-item[data-type='" + type + "']").fadeIn(300);
            $(".case-item[data-type='" + type + "']").fadeIn(300);
        } else if (type === "all" && category !== "all") {
            $(".product-item, .case-item").hide();
            $(".product-item[data-category='" + category + "']").fadeIn(300);
            $(".case-item[data-category='" + category + "']").fadeIn(300);
        } else {
            $(".product-item, .case-item").hide();
            $(".product-item[data-type='" + type + "'][data-category='" + category + "']").fadeIn(300);
            $(".case-item[data-type='" + type + "'][data-category='" + category + "']").fadeIn(300);
        }
        
        lazyLoadImages();
    });

    $(".masonry-grid").each(function() {
        var $grid = $(this);
        var items = $grid.find(".masonry-item");
        
        items.each(function() {
            var $item = $(this);
            var height = $item.find("img").height();
            $item.css("height", height + "px");
        });
    });

    $(window).resize(function() {
        $(".masonry-grid").each(function() {
            var $grid = $(this);
            var items = $grid.find(".masonry-item");
            
            items.each(function() {
                var $item = $(this);
                var height = $item.find("img").height();
                $item.css("height", height + "px");
            });
        });
    });

    $(".img-preload").each(function() {
        var src = $(this).attr("src");
        var preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = src;
        document.head.appendChild(preloadLink);
    });
});
