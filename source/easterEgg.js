firstEasterEgg=document.getElementById("firstEasterEgg").volume = 0.1;
secondEasterEgg=document.getElementById("secondEasterEgg").volume = 0.1;
thirdEasterEgg=document.getElementById("thirdEasterEgg").volume = 0.1;

$('#name').data('counter', 0)

	.click(function () {
		var counter = $(this).data('counter');

		if (counter == 4) {
			firstEasterEgg.play();
			$(this).data('counter', counter + 1);
		} else if (counter == 9){
			secondEasterEgg.play();
			$(this).data('counter', counter + 1);
		} else if (counter == 14){
			thirdEasterEgg.play();
			$(this).data('counter', counter = 0);
		} else {
			$(this).data('counter', counter + 1);
		}
	});
