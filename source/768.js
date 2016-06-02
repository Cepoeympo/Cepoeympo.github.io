$(document).ready(function () {
    var windowWidth = $(window).width();

    if (windowWidth < 769) {
        $('.certificate_link').addClass('disabled');
        $('.flex1').removeClass('flex-container');
        $('.flex2').removeClass('flex-container-two');
    }

});

$(window).resize(function () {
    var windowWidth = $(window).width();

    if (windowWidth < 769) {
        $('.certificate_link').addClass('disabled');
        $('.flex1').removeClass('flex-container');
        $('.flex2').removeClass('flex-container-two');
    } else {
        $('.certificate_link').removeClass('disabled');
        $('.flex1').addClass('flex-container');
        $('.flex2').addClass('flex-container-two');
    }
});