function getUpFirstChar(){
    result = "";
    str = prompt("Введите строку с маленькой буквы", "строка");
    document.getElementById('39').innerHTML = "<b>Результат: </b>";
    document.getElementById('39').innerHTML += UpFirstChar(str);
}

function UpFirstChar(str){
    if(str.length !== 0){
        return str[0].toUpperCase() +  str.slice(1);
    }
    else
        return "Введите строку!";
}
