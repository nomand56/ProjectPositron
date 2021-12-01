function Farenheit() {
    var data = document.getElementById('inpd').value;
    var x = parseInt(data);
    var celsiustofaren = (9 / 5 * x + 32);
    alert(celsiustofaren);
}


function heightincenti() {
    var input = document.getElementById('val').value;
    var c = parseInt(input);

    var converter = 2.54 * c;

    alert(converter);


}

function averg() {
    var f = document.getElementById('val1').value;
    var h = document.getElementById('val2').value;
    var q = document.getElementById('val3').value;
    var f1 = parseInt(f);
    var h1 = parseInt(h);
    var q1 = parseInt(q);
    var avrg = (f1 + h1 + q1) / 3;
    grade = "";
    if (avrg >= 80) {
        grade = "You are above standard"
    } else {
        grade = "you are under average"

    }
    alert(grade);
}