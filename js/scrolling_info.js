var lastScroll = 0;
jQuery(document).ready(function(e) {
    e(".itsmoving"), e(window).scroll(function() {
        setTimeout(function() {
            var t = e(window).scrollTop();
            t > lastScroll + 0 ? e(".itsmoving").removeClass("scrollingup") : e(".itsmoving").addClass("scrollingup"), lastScroll = t
        }, 0)
    })
}), $(document).ready(function() {
    if ($(".ontop").offset() != undefined) {
        var e = $(".ontop").offset().top,
            t = function() {
                var t = $(window).scrollTop();
                var b = $(document).height() - $(window).height();
                t > e ? $(".ontop").removeClass("top_position") : $(".ontop").addClass("top_position")
                b != t ? $(".ontop").removeClass("bottom_position") : $(".ontop").addClass("bottom_position")
            };
        t(), $(window).scroll(function() {
            t()
        })
    }
})