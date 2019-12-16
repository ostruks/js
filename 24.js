result = "";
let obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};

for(let city in obj){
    result += `<br>${city} - это ${obj[city]}`;
}
document.getElementById('24').innerHTML = "<b>Результат: </b>";
document.getElementById('24').innerHTML += result;