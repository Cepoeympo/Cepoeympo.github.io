/* ------ Револьверка ------ */
function revolver(){

	var n = 0;

	do {
		var x = prompt('Введите lol, что бы сдаться!');

		if ( x == 'lol' ) {
			alert('Тюфяк! Всего раундов: ' + n);
			break;
		} else if ( ( x != 'lol' ) && ( ( Math.random() * 6 ) < 1 ) ) {
			alert('Крутяк! Всего раундов: ' + n);
			break;
		} 
		
		n++;
	} while(true);
}