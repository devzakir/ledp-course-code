$(document).ready(function(){
    var $grid = $('.portfolio-item-container').isotope({
        // options
        itemSelector: '.portfolio-item-grid',
        layoutMode: 'fitRows'
    });


    // filter items on button click
    $('#graphics').on( 'click', function() {
        $('.portfolio-menu li a.active').removeClass('active');

        $(this).addClass('active');
        $grid.isotope({ filter: '.graphics' });
    });

    $('#webdesign').on( 'click', function() {
        $('.portfolio-menu li a.active').removeClass('active');

        $(this).addClass('active');
        $grid.isotope({ filter: '.webdesign' });
    });

    $('#wordpress').on( 'click', function() {
        $('.portfolio-menu li a.active').removeClass('active');

        $(this).addClass('active');
        $grid.isotope({ filter: '.wordpress' });
    });

    $('#all').on( 'click', function() {
        $('.portfolio-menu li a.active').removeClass('active');

        $(this).addClass('active');
        $grid.isotope({ filter: '.portfolio-item-grid' });
    });

});