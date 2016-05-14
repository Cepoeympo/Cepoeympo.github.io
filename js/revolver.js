/* ------ Револьверка ------ */
window.onload = function(){
    document.getElementById('revolver').onclick = function () {

        var fire = 0;

        var change_name = 0;
        /*
         change_name++
         change_name--
         == 1) {}
         != 1) {}
         */
        do {
            if ((Math.floor(Math.random() * (7))) < 1) {
                alert('Крутяк! ты помер аж на ' + n + ' выстреле');
                break;
            }

            n++;
        } while (true);

        alert((Math.floor(Math.random() * (7))));
    }
};

//( Math.random() * 6 ) < 1 )
