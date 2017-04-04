
//Send data to create document
function sendTxt() {
    document.getElementById('one').innerHTML = document.getElementById('val1').value;
    document.getElementsByClassName('two')[0].innerHTML = document.getElementById('val2').value;
    document.getElementsByClassName('two')[1].innerHTML = document.getElementById('val2').value;
    document.getElementById('three').innerHTML = document.getElementById('val3').value;
    document.getElementById('four').innerHTML = document.getElementById('val4').value;
    document.getElementById('five').innerHTML = document.getElementById('val5').value;
    document.getElementById("date").innerHTML = formatDate();

    function formatDate() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),

            months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

        return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + 'p';
    }
}

//Print DOCUMENT

function printDoc() {
    window.print();
}
