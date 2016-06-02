function printsite() {
    if (navigator.platform == "Win32") {
        window.print();
    }
    else {
        alert("Попробуйте распечатать через Ctrl + P");
    }
}