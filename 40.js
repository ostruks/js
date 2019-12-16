function getUpLastChar(){
    result = "";
    str = prompt("Введите строку с маленькой буквы в конце", "строка");
    document.getElementById('40').innerHTML = "<b>Результат: </b>";
    document.getElementById('40').innerHTML += UpLastChar(str);
}

function UpLastChar(str){
    if(str.length !== 0){
        return str.slice(-(str.length), str.length - 1) + str[str.length - 1].toUpperCase();
    }
    else
        return "Введите строку!";
}
