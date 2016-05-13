function rndm(){
		return Math.floor(Math.random() * (21 - 7 + 1)) + 7;
	}
			
	function seven21multy(){
	
	var i = 0;

	while (i != 666) {
	
		var userOneAnswer = prompt('Игрок 1 думает, что это число:');
		
		if( (userOneAnswer < 7) && (userAnswer != null) ){
			alert('Читайте лучше... НЛО загадало число больше 7!');
			i++;
		} else if ( (userOneAnswer > rndm() && userOneAnswer <= 21) ){
			alert('Ну это уже перебор.. Давай ещё раз!'+rndm()); //а если 21 ?!
			i++;
		} else if ( (userOneAnswer < rndm() && userOneAnswer >= 7) ){
			alert('Маловато будет.. Давай ещё раз!');
			i++;
		} else if ( (userOneAnswer == rndm() )){
			alert('НЛО не верит своим глазам... Именно ты сделал это! \nИгрок 1 угадал число с '+i+' раза!');
			break;
		} else if ( (userOneAnswer.toLowerCase() == 'хватит' ) || (userAnswer == null)){
			alert('Ну и ну... Главное - не победа? \nИтого: '+i+' участий =)')
			break;
		} else {
			alert('Читайте лучше... НЛО загадало число меньше 21!');
			i++;
		}
		
		var userTwoAnswer = prompt('А игрок 2 уверен, что:');
		
		if( (userTwoAnswer < 7) ){
			alert('Читайте лучше... НЛО загадало число больше 7!');
			i++;
		} else if ( (userTwoAnswer > rndm() && userTwoAnswer <= 21) ){
			alert('Ну это уже перебор.. Давай ещё раз!');
			i++;
		} else if ( (userTwoAnswer < rndm() && userTwoAnswer >= 7) ){
			alert('Маловато будет.. Давай ещё раз!');
			i++;
		} else if ( (userTwoAnswer == rndm() )){
			alert('НЛО не верит своим глазам... Именно ты сделал это! \nИгрок 2 угадал число с '+i+' раза!');
			break;
		} else if ( (userTwoAnswer.toLowerCase() == 'хватит' )){
			alert('Ну и ну... Главное - не победа? Итого: '+i+' участий =)');
			break;
		} else {
			alert('Читайте лучше... НЛО загадало число меньше 21!');
			i++;
		}
	}
}