$(document).ready(function(){
    $(".javascript").percircle();
    $(".html").percircle();
    $(".css").percircle();

    $("#demoTwo").percircle({
        perdown: true,
        secs: 14,
        timeUpText: 'finally!',
        reset: true,
        // more options here
    });
})