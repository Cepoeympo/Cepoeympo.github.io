$(document).ready(function(){
    var windowWidth = $(window).width();

    if(windowWidth<769){
        $('.certificate_link').addClass('disabled')
    }
});