$(document).ready(function () {
    // smooth scroll
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });



    // $(window).scroll(function () {
    //     if ($(document).scrollTop() > 20) {
    //         $("header").addClass("headerFixed");
    //     } else {
    //         $("header").removeClass("headerFixed");
    //     }
    // });




    // $("[videoPlay]").on("click", function () {
    //     var videoId = $(this).attr("videoPlay");
    //     var videoURL = $(this).attr("videoUrl");
    //     $(".videoFrame").children("iframe").attr("src", "");
    //     $(".videoFrame").children("video").attr("src", "");
    //     $(".videoFrame").removeClass("show");
    //     $(videoId).addClass("show");
    //     // $(videoId).children("iframe").attr("src", videoURL + "?autoplay=1");
    //     $(videoId).children("iframe").attr("src", videoURL);
    //     $(videoId).children("video").attr("src", videoURL);
    // });


});