$(document).ready(function () {
    var docH = document.documentElement.clientHeight;
    if (docH <= 700||$("body").height()>=docH) {
        return;
    } else {
        $("#content").css("height", docH - 700 + 460);
    }
});