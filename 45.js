function getSumFromArrayWithOtherSymbol(){
    let sum = 0;
    let number = "";
    let tmp = "";
    let arr = [];
    do{
        number = prompt("Введите размер массива", "20");
    }
    while(number == null || isNaN(number));

    for(let i = 0; i < number; i++){
        tmp = prompt("Введите любое значение", "20");
        arr.push(tmp);
    }
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            sum += Number(arr[i]);
        }
    }
    document.getElementById('45').innerHTML = "<b>Результат: </b>";
    document.getElementById('45').innerHTML += arr.join(', ');
    alert(sum);
}