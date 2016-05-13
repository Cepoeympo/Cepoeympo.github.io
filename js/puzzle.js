function checkAnswers(){
	var answer1 = document.getElementById('puzzle1').value;

	var goodAnswer = 0;
	if(answer1.toLowerCase() == 'гвоздь')
		goodAnswer++;

	var answer2 = document.getElementById('puzzle2').value;
	if(answer2.toLowerCase() == 'снег')
		goodAnswer++;
	
	if(goodAnswer == 0)
		alert('Вы ничего не угадали =(');
	else
		alert('Количество правильных ответов: ' + goodAnswer);
}