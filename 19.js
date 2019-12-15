function getNumber(){
    result = "";
    let num = "";
    do{
        num = prompt("Введите число", "3");
    }
    while(num == null || isNaN(num));
    result = `Квадрат числа ${num} равен ${ Math.pow(num, 2) }`;
    alert(result);
}