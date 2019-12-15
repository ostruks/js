function getSumOfStrscharCode(){
    result = "";
    let str = "Привет, Мир!";
    let sum = 0;
    for(let char in str){
        sum += Number(char);
    }
    result = sum;
    document.getElementById('17').innerHTML = "<b>Результат: </b>";
    document.getElementById('17').innerHTML += `Сумма символов Привет, Мир! = ${result}`;
    alert(num);
}