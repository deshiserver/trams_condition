(function ($) {
    "user strict";

    var w = $(window).width();
    var MarginTop = (w > 1199) ? 80 : 0;
    if ($('.sidebar').length) {
        $('.sidebar').theiaStickySidebar({
            'containerSelector': '.blog-section',
            'additionalMarginTop': MarginTop,
            'minWidth': 992,
        });
    }

    var w = $(window).width();
    var MarginTop = (w > 1199) ? 80 : 0;
    if ($('.privacy-sidebar-area').length) {
        $('.privacy-sidebar-area').theiaStickySidebar({
            'containerSelector': '.privacy-section',
            'additionalMarginTop': MarginTop,
            'minWidth': 992,
        });
    }



})(jQuery);