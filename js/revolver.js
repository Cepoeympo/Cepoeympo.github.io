/* ------ Револьверка ------ */
window.onload = function() {

    var n = 1;
    var player1 = 'Игрок 1';
    var player2 = 'Игрок 2';
    var player_name = player2;

    document.getElementById('first_name').oninput = function name_one (){
        document.getElementById('name_output_one').innerHTML = document.getElementById('first_name').value;
        player1 = document.getElementById('first_name').value;
        document.getElementById('player_name').innerHTML = player1;
    };

    document.getElementById('second_name').oninput = function name_two (){
        document.getElementById('name_output_two').innerHTML = document.getElementById('second_name').value;
        player2 = document.getElementById('second_name').value;
        player_name = player2;
    };

    document.getElementById('fire').onclick = function () {

        var luck = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);

        if ( luck == 3 ) {
            if ( n % 2 == 1 ) {
                player_name = player1;
            }
            else {
                player_name = player2;
            }
            document.getElementById('result').innerHTML = n;
            alert('Крутяк! ' + player_name + ' помер аж на ' + n + ' выстреле... Поздравляю!)');
            document.getElementById('player_name').innerHTML = player1;
            document.getElementById('result').innerHTML = 'снова 0';
            n = 1;

        } else {
            document.getElementById('player_name').innerHTML = player_name;
            document.getElementById('result').innerHTML = n;
            n++;
        }
        if ( n % 2 == 1 ) {
            player_name = player2;
        }
        else {
            player_name = player1;
        }


    }
};

