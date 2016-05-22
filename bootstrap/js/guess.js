window.onload = function () {
    document.getElementById("guess_slider").oninput = function() {
        document.getElementById("num1").value = document.getElementById("guess_slider").value;
    };

    document.getElementById("num1").oninput = function() {
        document.getElementById("guess_slider").value = document.getElementById("num1").value;
    };

    var i = 0;
    var rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    var num1 = document.getElementById("num1");

    document.getElementById('seven21').onclick = function(){

        do {
            if ( num1.value == rndm ){
                i++;
                document.getElementById("result").innerHTML = 'НЛО не верит своим глазам... Ты сделал это c '+i+' раза! Ура-Ура-Ура!';
                num1.style.boxShadow = 'inset 0px 0px 0px red';
                num1.style.background = '#6CC000';
                num1.style.border = "2px solid #6CC000";
                num1.style.color = "#000";
                rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                i = 0;
                break;
            } else if ( (num1.value > rndm && num1.value <= 100) ){
                document.getElementById("result").innerHTML = 'Ну это уже перебор.. Попробуй ещё раз!';
                num1.style.boxShadow = 'inset 0px 0px 15px red';
                num1.style.border = "2px solid #F00";
                num1.style.background = "#fff";
                num1.style.color = "#000";
                i++;
                break;
            } else if ( (num1.value < rndm && num1.value >= 1) ){
                document.getElementById("result").innerHTML = 'Маловато будет.. Попробуй ещё раз!';
                num1.style.boxShadow = 'inset 0px 0px 15px #18B1F7';
                num1.style.border = "2px solid #18B1F7";
                num1.style.background = "#fff";
                num1.style.color = "#000";
                i++;
                break;
            }
        } while (true);
    };

    document.getElementById('lose').onclick = function(){
        document.getElementById("result").innerHTML = 'Эх, а счастье было так близко...';
        num1.style.boxShadow = 'inset 0px 0px 0px red';
        num1.style.border = "2px solid #000";
        num1.style.background = "#000";
        num1.style.color = "#fff";
        num1.value = rndm;
        rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        i = 0;
    };

    document.getElementById('refresh').onclick = function(){
        i = 0;
        document.getElementById("result").innerHTML = 'Ну попытайся ещё разок..';
        rndm = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        num1.value = 50;
        document.getElementById("guess_slider").value = 50;
        num1.style.boxShadow = 'inset 0px 0px 0px red';
        num1.style.border = "2px solid #000";
        num1.style.background = "#fff";
        num1.style.color = "#000";
     };
};