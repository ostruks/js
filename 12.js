function getSecondsPerHour(){
    result = "";
    let hours = 0;
    let seconds = 0;
    do{
        hours = prompt("Введите часы", "20");
    }
    while(hours == null || isNaN(hours));
    seconds = hours * 3600;
    result = `В ${ hours } часах ${ seconds } секунд`;
    document.getElementById('12').innerHTML = "<b>Результат: </b>";
    document.getElementById('12').innerHTML += result;
    alert(result);
}