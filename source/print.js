/**
 * Created by Duke on 02.06.2016.
 */
function printsite() {
    if (navigator.platform == "Win32") {
        window.print();
    }
    else {
        alert("print out this page by hitting command + p");
    }
}