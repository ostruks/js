function getChangeChar(){
    result = "";
    str = prompt("Введите строку в формате var_test_text", "var_test_text");
    document.getElementById('41').innerHTML = "<b>Результат: </b>";
    document.getElementById('41').innerHTML += ChangeChar(str);
}

function ChangeChar(str){
    if(str.length !== 0){
        str = str.split('_');
        for(let i = 1; i < str.length; i++){
            str[i] = str[i][0].toUpperCase() +  str[i].slice(1);
        }
        return str.join('');
    }
    else
        return "Введите строку!";
}
