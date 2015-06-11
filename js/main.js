/**
 * Created by hugo on 15/6/11.
 */

(function() {
    var $w = $(window);
    var $prog2 = $('.progress-indicator-2');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;

    $w.on('scroll', function() {
        var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
        updateProgress(perc);
    });

    function updateProgress(perc) {
        $prog2.css({width: perc * 100 + '%'});
    }
f
}());

$("#back_to_top").show();
$("#back_to_top").on("click", function() {
    $("html body").animate({
        scrollTop: 0
    }, 200);
});