result = "";
arr = [2, 5, 9, 15, 0, 4];
for(let numb of arr){
    if(numb > 3 && numb < 10){
        result += " " + numb;
    }
}
document.getElementById('27').innerHTML = "<b>Результат: </b>";
document.getElementById('27').innerHTML += result;