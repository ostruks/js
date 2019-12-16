result = "aaa bbb ccc";
result = `1 - ${result.substr(0, 4)} ${result.substr(7, 11)}`
+ `, 2 - ${result.substring(0, 4)} ${result.substring(7, 11)}`
+ `, 3 - ${result.split(' ').slice(0, 1)} ${result.split(' ').slice(2, 3)}`;
document.getElementById('33').innerHTML = "<b>Результат: </b>";
document.getElementById('33').innerHTML += result;