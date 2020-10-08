$(document).ready(function(){
    let backToTop = $('.back-to-top');

    backToTop.on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 600);
    });

    $(window).on('scroll', function(){
        let Yoffset = $(this).scrollTop();

        if(Yoffset > 500){
            backToTop.fadeIn(100);
        }else {
            backToTop.fadeOut(100);
        }
    });
});