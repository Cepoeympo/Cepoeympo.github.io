window.onload = function () {
    document.getElementById("num1").oninput = function () {
        document.getElementById("num2").value = document.getElementById("num1").value;
    };

    document.getElementById("num2").oninput = function () {
        document.getElementById("num1").value = document.getElementById("num2").value;
    };

    var rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    var rndmCounter = 0;

    var num1 = document.getElementById("num1");


    document.getElementById('seven21').onclick = function () {
        do {
            if (num1.value == rndm) {
	            rndmCounter++;
                document.getElementById("result").innerHTML = 'НЛО не верит своим глазам... Ты сделал это c ' + rndmCounter + ' раза! Ура-Ура-Ура!';
                //document.getElementById("result").style.color = "#0973D9";
                //num1.style.boxShadow = 'inset 0px 0px 0px red';
                num1.style.background = '#6CC000';
                num1.style.border = "2px solid #6CC000";
                num1.style.color = "#000";
                rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	            rndmCounter = 0;
                break;
            } else if ((num1.value > rndm && num1.value <= 100)) {
                document.getElementById("UFO_title").innerHTML = 'Понравилось? НЛО догадывалось об этом..';
                document.getElementById("result").innerHTML = 'Ну это уже перебор.. Попробуй ещё раз!';
                //num1.style.boxShadow = 'inset 0px 0px 15px red';
                num1.style.border = "2px solid #F00";
                num1.style.background = "#fff";
                num1.style.color = "#000";
	            rndmCounter++;
                break;
            } else if ((num1.value < rndm && num1.value >= 1)) {
                document.getElementById("UFO_title").innerHTML = 'Понравилось? НЛО догадывалось об этом..';
                document.getElementById("result").innerHTML = 'Маловато будет.. Попробуй ещё раз!';
                //num1.style.boxShadow = 'inset 0px 0px 15px #18B1F7';
                num1.style.border = "2px solid #18B1F7";
                num1.style.background = "#fff";
                num1.style.color = "#000";
	            rndmCounter++;
                break;
            }
        } while (true);
    };

    document.getElementById('lose').onclick = function () {
        document.getElementById("result").innerHTML = 'Эх, а счастье было так близко...';
        //num1.style.boxShadow = 'inset 0px 0px 0px red';
        num1.style.border = "2px solid #000";
        num1.style.background = "#000";
        num1.style.color = "#fff";
        num1.value = rndm;
        rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	    rndmCounter = 0;
    };

    document.getElementById('refresh').onclick = function () {
	    rndmCounter = 0;
        document.getElementById("result").innerHTML = 'Ну попытайся ещё разок..';
        rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        num1.value = 50;
        document.getElementById("num2").value = 50;
        //num1.style.boxShadow = 'inset 0px 0px 0px red';
        num1.style.border = "2px solid #000";
        num1.style.background = "#fff";
        num1.style.color = "#000";
    };

////////////////////////////////////
////////////////////////////////////
/*
	var minCounter;
	var maxCounter;
	var averageCounter;
	var totalGames; // = 0;
	var totalSum; // ??
	var lastAttempt;


	function saveLoadCounter() {
		totalGames++;

		if (minCounter > lastAttempt){
			localStorage.setItem('hide', idVhod.style.display); // Edit !
		}
		 if (maxCounter < lastAttempt){
            localStorage.setItem('hide', idVhod.style.display); // Edit !
		 }

		averageCounter = totalSum / totalGames; // Проверить !

		localStorage.setItem('averageCounter', idVhod.style.display); // Edit !
		localStorage.setItem('totalGames', idVhod.style.display); // Edit !
		localStorage.setItem('totalSum', idVhod.style.display); // Edit !
	}

//	function checkLocalStorage() {
//		try {
//			return 'localStorage' in window && window.localStorage !== null;
//		} catch (e) {
//			return false;
//		}
//	}

	if (checkLocalStorage() === true) {
		//if (num1.value == rndm) {
		var minCounter;
		var maxCounter;
		var averageCounter;


		localStorage.setItem('minCounter', idVhod.style.display);
		//localStorage.setItem('maxCounter', idVhod.style.display);
		//localStorage.setItem('averagecounter', idVhod.style.display);


		if(localStorage.getItem('minCounter') === true) {
			document.getElementById('idVhod').style.display = 'inline';
		} else {
			idVhod.style.display = (idVhod.style.display == 'inline') ? '' : 'inline';
			localStorage.setItem('hide', idVhod.style.display);
			}
		}
*/
////////////////////////////////////
////////////////////////////////////

};


