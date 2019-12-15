function getAllAboutNumbers(){
    let a = 10;
    let b = 2;
    let sum = a + b;
    let diff = a - b;
    let prod = a * b;
    let quo = a / b;
    document.getElementById('15').innerHTML = "<b>Результат: </b>";
    document.getElementById('15').innerHTML += `a = ${a}, b = ${b}. Сумма = ${sum}, разность = ${diff}, произведение = ${prod}, частное = ${quo}`;
    alert(num);
}