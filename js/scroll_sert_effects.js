$(window).scroll(function(){
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    // effect - No3
    var secondAnimation = function(){
/*
        $('.certificate:eq(0)').delay(1000).css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000);
        $('.certificate:eq(1)').delay(2000).css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000);
        $('.certificate:eq(2)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(3000);
        $('.certificate:eq(3)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(4000);
        $('.certificate:eq(4)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(5000);
        $('.certificate:eq(5)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(6000);
        $('.certificate:eq(6)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(7000);
        $('.certificate:eq(7)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(8000);
        $('.certificate:eq(8)').css('display', 'inline-block').addClass('animated flipInX').fadeIn(1000).delay(9000);

*/


        $('.certificate:eq(1)').delay(1300).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(2)').delay(1800).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(3)').delay(2200).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(4)').delay(700).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(5)').delay(1300).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(6)').delay(1800).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(7)').delay(2200).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });
        $('.certificate:eq(8)').delay(2200).addClass("animated flipInX").animate({},'slow', function(){
            $(this).css({ display: "inline-block"});
        });



    };


    if(windowWidth<=549){
        if(windowScrollTop>1750){
            secondAnimation();
        }
    }else if(windowWidth>549 && windowWidth<=991){
        if(windowScrollTop>1150){
            secondAnimation();
        }
    }else{
        if(windowScrollTop>1400){
            secondAnimation();
        }
    }


});
/*
$('.method:eq(0)').addClass("animated flipInX").delay(700).css({ display: "inline-block"}).animate({},'slow', function(){
});
$('.method:eq(1)').addClass("animated flipInX").delay(2300).css({ display: "inline-block"}).animate({},'slow', function(){
});
$('.method:eq(2)').addClass("animated flipInX").delay(3800).css({ display: "inline-block"}).animate({},'slow', function(){
});
$('.method:eq(3)').addClass("animated flipInX").delay(4200).css({ display: "inline-block"}).animate({},'slow', function(){
*/


/*
$('.method:eq(0)').delay(700).addClass("animated flipInX").animate({},'slow', setTimeout(function(){
    $(this).css({ display: "inline-block"})}, 800)
);
$('.method:eq(1)').delay(700).addClass("animated flipInX").animate({},'slow', setTimeout(function(){
    $(this).css({ display: "inline-block"})}, 1800)
);
$('.method:eq(2)').delay(700).addClass("animated flipInX").animate({},'slow', setTimeout(function(){
    $(this).css({ display: "inline-block"})},2800)
);
$('.method:eq(3)').delay(700).addClass("animated flipInX").animate({},'slow', setTimeout(function(){
    $(this).css({ display: "inline-block"})}, 3800)
);
};
*/