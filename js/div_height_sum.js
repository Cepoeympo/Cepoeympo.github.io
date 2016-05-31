// >974 experience = skill + education
// <975 education = experience - skill

var windowWidth = $(window).width();

// var audio=$('#muz');
var ex_h = document.getElementById('experience').clientHeight;
var sk_h = document.getElementById('skill').clientHeight;
var ed_h = document.getElementById('education').clientHeight;

$(document).ready(function () {
    if (windowWidth > 974) {
        ex_h = sk_h + ed_h + 3;
        //$("#experience").css('background', 'green').animate({height: ex_h});
        $("#experience").css('background', 'green').animate({height: ex_h}, 0)
    } else {
        ed_h = ex_h - sk_h -170;
        $('#education').css('background', 'red').animate({height: ed_h}, 0)
    }
});

$(window).resize(function() {
    var windowWidth = $(window).width();

    if (windowWidth > 974) {
        ex_h = sk_h + ed_h - 1;
        $("#experience").css('background', 'green').animate({height: ex_h}, 0)
    } else {
        ed_h = ex_h - sk_h - 170;
        $('#education').css('background', 'red').animate({height: ed_h}, 0)
    }
});