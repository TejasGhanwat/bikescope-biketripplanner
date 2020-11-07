
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".nav-logo").addClass("logo-hidden");
    } else {
        $(".nav-logo").removeClass("logo-hidden");
    }
});