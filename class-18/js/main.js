$(document).ready(function(){
    $('.slider-section').fsScroll({
        keyboard: true,
        loop: true,

        beforeScroll: function(el, index) {
            el.find('h1').addClass('text-animate');
        },

        afterScroll: function(el, index) {
            el.find('h1').removeClass('text-animate');
        }
    });
});