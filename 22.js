result = "";
arr = [1, 2, 3, 4, 5];
for(let numb of arr){
    result += numb + " ";
}
document.getElementById('22').innerHTML = "<b>Результат: </b>";
document.getElementById('22').innerHTML += result;