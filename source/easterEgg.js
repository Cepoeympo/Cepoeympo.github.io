firstEasterEgg=document.getElementById("firstEasterEgg");
secondEasterEgg=document.getElementById("secondEasterEgg");
thirdEasterEgg=document.getElementById("thirdEasterEgg");

firstEasterEgg.volume=1;
secondEasterEgg.volume=0.1;
thirdEasterEgg.volume=0.5;

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


/* firstEasterEgg=document.getElementById("firstEasterEgg").volume = 0.01;
secondEasterEgg=document.getElementById("secondEasterEgg").volume = 0.01;
thirdEasterEgg=document.getElementById("thirdEasterEgg").volume = 0.01;



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




<audio id="myPlayer" autoplay="autoplay" controls>
   <source src="assets/audio/VLA.mp3" type="audio/mpeg">
</audio>


myVid=document.getElementById("myPlayer");
myVid.volume=0.2;
