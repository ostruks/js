result = "";
number = 1;
while(number <= 50){
    result += "<br>" + number;
    number++;
}
document.getElementById('21').innerHTML = "<b>Результат: </b>";
document.getElementById('21').innerHTML += result;