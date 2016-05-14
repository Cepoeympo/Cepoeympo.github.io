/* ------ Револьверка ------ */
window.onload = function() {

    var n = 1;
    var player1 = 'Игрок 1';
    var player2 = 'Игрок 2';
    var player_name = player2;

    document.getElementById('fire').onclick = function () {

        var luck = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);

        if ( luck == 3 ) {
            document.getElementById('result').innerHTML = n;
            alert('Крутяк! Ты помер аж на ' + n + ' выстреле, ' + player_name + '... Поздравляю!');
            document.getElementById('player_name').innerHTML = 'Игрок 1';
            document.getElementById('result').innerHTML = 'снова 0';
            n = 1;
        } else {
            document.getElementById('player_name').innerHTML = player_name;
            document.getElementById('result').innerHTML = n;
            n++;
        }

        if ( n % 2 == 1 ) {
            player_name = player2;
        } else {
            player_name = player1;
        }
    }
};

