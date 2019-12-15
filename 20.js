function getSecInHoursDayMonth(){
    result = "";
    let num = "";
    do{
        num = prompt("Введите число", "10h");
    }
    while(num == null);
    if(num.includes("h")){
        num = Number(num.replace("h", ""));
        result = `${num * 3600} секунд за ${num} часов`;
    }
    else if(num.includes("d")){
        num = Number(num.replace("d", ""));
        result = `${num * 86400} секунд за ${num} дней`;
    }
    else if(num.includes("w")){
        num = Number(num.replace("w", ""));
        result = `${num * 604800} секунд за ${num} недель`;
    }
    else if(num.includes("m")){
        num = Number(num.replace("m", ""));
        result = `${num * 2,628e+6} секунд за ${num} месяцев`;
    }
    document.getElementById('20').innerHTML = "<b>Результат: </b>";
    document.getElementById('20').innerHTML += result;
}