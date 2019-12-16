result = "";
number = 0;
while(number <= 100){
    if(number % 2 == 0 && number !== 0){
        result += "<br>" + number;
    }
    number++;
}
document.getElementById('25').innerHTML = "<b>Результат: </b>";
document.getElementById('25').innerHTML += result;