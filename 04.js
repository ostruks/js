let day = new Date().getDay();
result = "";
if(day === 0 || day === 6){
    result = "Спи дальше!";
}
else{
    console.log("Необходимости идти на работу!");
    result = "Необходимости идти на работу!";
}
document.getElementById('04').innerHTML = "<b>Результат: </b>";
result = day === 0 || day === 6 ? "Спи дальше!" : "Необходимости идти на работу!";
document.getElementById('04').innerHTML += result;