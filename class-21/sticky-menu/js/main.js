$(document).ready(function(){
    let header = $('header');

    function stickyMenu() {
        let yOffsetTop = $(this).scrollTop();

        if(yOffsetTop > 0.5) {
            header.addClass('sticky');
        }else {
            header.removeClass('sticky');
        }
    }

    $(window).on('scroll', function(){
        stickyMenu()
    });

    $(window).on('load', function(){
        stickyMenu();
    })
});