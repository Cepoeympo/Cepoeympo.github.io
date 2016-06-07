/*
 $('#gameStart').click(function () {
 $('#content').css('display', 'none');
 $('#game_box').css('display', 'block');
 });

 $('#gameStop').click(function () {
 $('#content').css('display', 'block');
 $('#game_box').css('display', 'none');
 });
 */

$('#gameStart').click(function () {
	$('#content').slideUp();
	$('#game_box').slideDown();
});

$('#gameStop').click(function () {
	$('#content').slideDown();
	$('#game_box').slideUp();
});

/*
onmouseenter="$('.spin1').addClass('fa-spin')"
onmouseleave="$('.spin1').removeClass('fa-spin')"
*/