$(document).ready(function(){
    var windowWidth = $(window).width();

    if(windowWidth<769){
        $('.certificate_link').addClass('disabled')
    }

});

$(window).resize(function(){
    var windowWidth = $(window).width();

    if(windowWidth<769){
        $('.certificate_link').addClass('disabled')
    } else {
        $('.certificate_link').removeClass('disabled')
    }
});