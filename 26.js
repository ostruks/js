result = "";
obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for(let key in obj){
    result += `<br>${key} - ${obj[key]}`;
}
document.getElementById('26').innerHTML = "<b>Результат: </b>";
document.getElementById('26').innerHTML += result;