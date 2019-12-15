function getSumOdd(){
    let number = "";
    let sum = 0;
    do{
        number = prompt("Введите число", "20");
    }
    while(number == null || isNaN(number));
    for(let i = 1; i <= number; i++){
        if(i % 2 !== 0)
            sum += i;
    }
    document.getElementById('10').innerHTML = "<b>Результат: </b>";
    document.getElementById('10').innerHTML += sum;
}