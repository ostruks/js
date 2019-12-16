result = "";
arr = [1, 2, 5, 9, 4, 13, 4, 10];
for(let numb of arr){
    if(numb === 4){
        result = "Есть!";
        break;
    }
}
document.getElementById('29').innerHTML = "<b>Результат: </b>";
document.getElementById('29').innerHTML += result;