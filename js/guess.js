function rndm(){
		return Math.floor(Math.random() * (21 - 7 + 1)) + 7;
	}
		
	function seven21(){

	var i = 0;

	while (i != 666) {
	
		var userAnswer = prompt('Прелетело НЛО и загадало число от 7 до 21.. Угадаешь?');
		
		if( (userAnswer < 7) && (userAnswer != null) ){
			alert('Читай лучше... НЛО загадало число больше 7!');
			i++;
		} else if ( (userAnswer > rndm() && userAnswer <= 21) ){
			alert('Ну это уже перебор.. Попробуй ещё раз!');
			i++;
		} else if ( (userAnswer < rndm() && userAnswer >= 7) ){
			alert('Маловато будет.. Попробуй ещё раз!');
			i++;
		} else if ( userAnswer == rndm() ){
			alert('НЛО не верит своим глазам... Ты сделал это! С '+i+' раза!');
			break;
		} else if ( (userAnswer.toLowerCase() == 'стоп')  || (userAnswer == null)){
			alert('Ну и ну... Главное - не победа? Итого: '+i+' участий =)');
			break;
		} 
		else {
			alert('Читай лучше... НЛО загадало число меньше 21!');
			i++;
		}
	}
}